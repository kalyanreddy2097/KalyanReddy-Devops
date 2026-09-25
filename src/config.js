// ─────────────────────────────────────────────────────────────
// HERO ANIMATION SETTINGS
// While totalFrames is 0, the hero shows the built-in placeholder character.
// When your video frames are ready:
//   1. Put them in public/hero-frames/ named frame_0001.webp, frame_0002.webp ...
//   2. Set totalFrames to how many frames you have
//   3. Set the frame ranges for each action (open the frames and note the numbers)
// ─────────────────────────────────────────────────────────────
export const HERO = {
  totalFrames: 121,
  folder: 'hero-frames/',
  prefix: 'frame_',
  ext: '.webp',
  pad: 4,
  fps: 24,
  ranges: {
    working: [1, 58],    // typing (plays forward and back, so the loop never jumps)
    left: [85, 93],      // turns to look at the left side of the screen
    right: [59, 71],     // turns to look at the right side of the screen
    greeting: [109, 121] // looks up at the visitor
  },
  holdMs: 2500 // how long left/right reactions hold before returning to work
}

export const PROFILE = {
  name: 'Kalyan Kumar Reddy',
  role: 'DevOps Engineer & SRE',
  location: 'Bengaluru, Karnataka',
  email: 'kalyanreddy2097@gmail.com',
  github: '', // add your GitHub URL here; the link stays hidden while empty
  linkedin: 'https://www.linkedin.com/in/kalyan-kumar-reddy-838a16261/',
  resume: 'Kalyan_Kumar_Reddy_Resume.pdf' // file lives in public/
}
