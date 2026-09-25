# Kalyan Reddy — Portfolio

Interactive DevOps portfolio with a cursor-reactive hero (React + Vite).

## Run it locally (Mac)

1. Install Node.js LTS from https://nodejs.org (check with `node -v`)
2. Unzip this project, then in Terminal:

```bash
cd ~/Downloads/portfolio      # or wherever you unzipped it
npm install
npm run dev
```

3. Open the `Local:` URL it prints (usually http://localhost:5173). Keep the Terminal open while you use it.

## Edit your details

- `src/config.js` → email, GitHub, LinkedIn, resume link
- `src/App.jsx` → about text, stack, case studies (replace the drafts)

## Add your real character frames

Until you add frames, a placeholder character is shown.

```bash
ffmpeg -i hero.mp4 -vf "fps=24,scale=1280:-1" -c:v libwebp -quality 80 public/hero-frames/frame_%04d.webp
```

Then in `src/config.js` set `totalFrames` to the number of frames and update the frame
ranges for working / left / right / greeting.

## Host it for free on GitHub Pages

1. Create a new public repo on GitHub named `portfolio`
2. Push this project:

```bash
git init
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

3. On GitHub: Settings → Pages → Source → **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push.
   Your site: `https://<your-username>.github.io/portfolio/`

Tip: name the repo `<your-username>.github.io` to get the shorter URL `https://<your-username>.github.io/`.
