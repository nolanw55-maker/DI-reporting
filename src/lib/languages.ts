export const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "de-ch", name: "Swiss German" },
  { code: "es", name: "Spanish" },
  { code: "pt", name: "Portuguese (Portugal)" },
  { code: "pt-br", name: "Portuguese (Brazil)" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "pl", name: "Polish" },
  { code: "sv", name: "Swedish" },
  { code: "sl", name: "Slovenian" },
  { code: "lt", name: "Lithuanian" },
  { code: "ro", name: "Romanian" },
  { code: "el", name: "Greek" },
  { code: "cs", name: "Czech" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const LANDING_LANGUAGE_NAMES = [
  "English",
  "German",
  "Spanish",
  "Portuguese",
  "Italian",
  "French",
  "Polish",
  "Slovenian",
  "Lithuanian",
  "Romanian",
];
