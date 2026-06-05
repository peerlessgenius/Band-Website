# Live Rock Band Website

A modern responsive React + TypeScript + Tailwind CSS website for a live rock band.

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Replace Content

Most editable content lives in `src/data/siteContent.ts`.

- Band name, tagline, and contact details: edit `bandInfo`, `heroContent`, and `contactInfo`.
- Navigation labels and section targets: edit `navLinks`.
- YouTube videos: edit the `videos` array. Replace `youtubeId` with the video ID from the YouTube URL.
- Social links: edit `socialLinks`.
- Sample songs: edit `sampleSetlist`.
- Member names, roles, descriptions, and images: edit `members`.

## Replace Photos And Assets

Placeholder files live in `public/assets/`.

- Logo: `public/assets/band-logo-placeholder.png`
- Hero photo: `public/assets/hero-band-placeholder.jpg`
- QR code: `public/assets/qr-code-placeholder.png`
- Member photos: `public/assets/member-placeholder-1.jpg` through `member-placeholder-4.jpg`

You can keep the same filenames to swap assets without changing code, or update the paths in `src/data/siteContent.ts`.

## Build For Production

```bash
npm run build
```

The production files will be generated in `dist/`.
