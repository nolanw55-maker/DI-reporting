import { create } from "zustand";
import type { CheckIssue } from "@/lib/ai";
import {
  DEFAULT_TEMPLATES,
  type ReportTemplate,
} from "@/lib/templates";

export interface HistoryItem {
  id: string;
  createdAt: number;
  templateName: string;
  language: string;
  report: string;
  summary: string;
  issueCount: number;
  revised: string;
}

interface ScribeState {
  hydrated: boolean;
  language: string;
  templateId: string;
  report: string;
  summary: string;
  issues: CheckIssue[];
  revised: string;
  customTemplates: ReportTemplate[];
  history: HistoryItem[];
  hydrate: () => void;
  setLanguage: (language: string) => void;
  setTemplateId: (templateId: string) => void;
  setReport: (report: string) => void;
  setCheck: (data: { summary: string; issues: CheckIssue[]; revised: string }) => void;
  saveCustomTemplate: (template: ReportTemplate) => void;
  deleteCustomTemplate: (id: string) => void;
  saveHistory: () => void;
  deleteHistory: (id: string) => void;
  loadHistory: (item: HistoryItem) => void;
  resetWorkspace: () => void;
}

const STORAGE_KEY = "jai-reporting-v2";

type Persisted = Pick<
  ScribeState,
  "language" | "templateId" | "customTemplates" | "history"
>;

function load(): Partial<Persisted> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Persisted;
  } catch {
    return {};
  }
}

function save(state: ScribeState) {
  if (typeof window === "undefined") return;
  const payload: Persisted = {
    language: state.language,
    templateId: state.templateId,
    customTemplates: state.customTemplates,
    history: state.history.slice(0, 40),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export const useScribe = create<ScribeState>((set, get) => ({
  hydrated: false,
  language: "en",
  templateId: "mri-knee",
  report: "",
  summary: "",
  issues: [],
  revised: "",
  customTemplates: [],
  history: [],
  hydrate: () => {
    const persisted = load();
    set({ ...persisted, hydrated: true });
  },
  setLanguage: (language) => {
    set({ language });
    save(get());
  },
  setTemplateId: (templateId) => {
    set({ templateId });
    save(get());
  },
  setReport: (report) => set({ report }),
  setCheck: (data) =>
    set({
      summary: data.summary,
      issues: data.issues,
      revised: data.revised,
    }),
  saveCustomTemplate: (template) => {
    set((s) => {
      const exists = s.customTemplates.some((t) => t.id === template.id);
      const customTemplates = exists
        ? s.customTemplates.map((t) => (t.id === template.id ? template : t))
        : [template, ...s.customTemplates];
      return { customTemplates };
    });
    save(get());
  },
  deleteCustomTemplate: (id) => {
    set((s) => ({
      customTemplates: s.customTemplates.filter((t) => t.id !== id),
      templateId: s.templateId === id ? "mri-knee" : s.templateId,
    }));
    save(get());
  },
  saveHistory: () => {
    const s = get();
    if (!s.report.trim()) return;
    const item: HistoryItem = {
      id: crypto.randomUUID(),
      createdAt: Date.now(),
      templateName:
        [...s.customTemplates, ...DEFAULT_TEMPLATES].find(
          (t) => t.id === s.templateId,
        )?.name ?? "Report",
      language: s.language,
      report: s.report,
      summary: s.summary,
      issueCount: s.issues.length,
      revised: s.revised,
    };
    set({ history: [item, ...s.history].slice(0, 40) });
    save(get());
  },
  deleteHistory: (id) => {
    set((s) => ({ history: s.history.filter((h) => h.id !== id) }));
    save(get());
  },
  loadHistory: (item) =>
    set({
      report: item.report,
      summary: item.summary,
      issues: [],
      revised: item.revised,
    }),
  resetWorkspace: () =>
    set({ report: "", summary: "", issues: [], revised: "" }),
}));

export function allTemplates(custom: ReportTemplate[]) {
  return [...custom, ...DEFAULT_TEMPLATES];
}
