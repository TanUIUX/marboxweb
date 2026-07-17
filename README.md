# Marbox Web

Static Framer export prepared for deployment on Vercel.

## Run locally

Node.js is the only requirement:

```bash
node serve.cjs
```

Then open `http://localhost:3000`.

## Deploy on Vercel

1. Import the GitHub repository into Vercel.
2. Select **Other** as the Framework Preset.
3. Leave the Build Command empty.
4. Use `.` as the Output Directory (or leave it at the detected project root).
5. Deploy.

The project uses `vercel.json` for SPA fallback, cache behavior, CORS, and basic security headers.
