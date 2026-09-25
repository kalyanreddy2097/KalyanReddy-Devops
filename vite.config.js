import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on GitHub Pages, Netlify, Vercel, Cloudflare Pages and S3
export default defineConfig({
  plugins: [react()],
  base: './',
})
