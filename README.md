# Jai Reporting

Free radiology **report checker**. Paste a draft, pick the exam type, get flags for laterality, contradictions, impression mismatches, and missing sections. Assistive only — the radiologist still signs.

## Use it

1. Open the workspace.
2. **Insert sample report** (MRI knee with planted errors) or paste your own draft.
3. **Check report**.

Never include patient identifiers.

## Run locally

```bash
npm install
npm run dev
```

Report checks call the xAI API. Set `XAI_API_KEY` on the server. Do not expose it to the browser.

## License

Use at your own professional risk. Not a medical device.
