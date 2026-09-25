// Stand-in character used until real video frames are added (see config.js).
// All motion is CSS, driven by data-state / data-phase on the .stage wrapper.
export default function Placeholder() {
  return (
    <svg className="char" viewBox="0 0 600 520" role="img" aria-label="Animated character working at a laptop">
      {/* monitor behind */}
      <g className="monitor">
        <rect x="380" y="110" width="180" height="118" rx="10" fill="#1d3049" />
        <rect x="392" y="122" width="156" height="94" rx="4" fill="#0f1b2d" />
        <polyline className="graph" points="400,196 420,184 438,190 456,164 474,172 492,146 510,158 530,138"
          fill="none" stroke="#6cc6e8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="400" y="130" width="46" height="6" rx="3" fill="#f2a541" className="alert" />
        <rect x="466" y="228" width="12" height="40" fill="#1d3049" />
        <rect x="440" y="266" width="64" height="8" rx="4" fill="#1d3049" />
      </g>

      {/* torso */}
      <path d="M184 478 Q186 356 300 340 Q414 356 416 478 Z" fill="#6f95be" />
      <path d="M268 342 L300 392 L332 342 Z" fill="#c98b62" />
      <path d="M262 340 L300 392 L286 352 Z M338 340 L300 392 L314 352 Z" fill="#88abd0" />
      <path d="M284 368 Q300 384 316 368" fill="none" stroke="#d9b24c" strokeWidth="2" />

      {/* neck */}
      <rect x="282" y="290" width="36" height="58" rx="14" fill="#b87a53" />

      {/* typing arms */}
      <g className="arms-typing">
        <path className="arm-l" d="M200 390 Q190 450 250 452" fill="none" stroke="#6f95be" strokeWidth="34" strokeLinecap="round" />
        <path className="arm-r" d="M400 390 Q410 450 350 452" fill="none" stroke="#6f95be" strokeWidth="34" strokeLinecap="round" />
      </g>

      {/* waving / pointing arm */}
      <g className="arm-wave">
        <path d="M404 380 Q450 330 452 262" fill="none" stroke="#6f95be" strokeWidth="34" strokeLinecap="round" />
        <circle cx="452" cy="248" r="20" fill="#c98b62" />
      </g>

      {/* head */}
      <g className="head">
        <ellipse cx="300" cy="236" rx="60" ry="68" fill="#c98b62" />
        <ellipse cx="240" cy="240" rx="10" ry="16" fill="#b87a53" />
        <ellipse cx="360" cy="240" rx="10" ry="16" fill="#b87a53" />
        {/* hair */}
        <path d="M236 222 Q224 150 290 150 Q310 128 336 150 Q378 160 366 220 Q352 184 322 186 Q300 170 276 188 Q252 186 236 222 Z" fill="#1a1412" />
        {/* beard */}
        <path d="M244 246 Q250 312 300 312 Q350 312 356 246 Q346 290 300 292 Q254 290 244 246 Z" fill="#231a16" />
        <path className="mouth" d="M284 272 Q300 280 316 272" fill="none" stroke="#5a2e20" strokeWidth="4" strokeLinecap="round" />
        <path d="M278 262 Q300 252 322 262" fill="none" stroke="#231a16" strokeWidth="6" strokeLinecap="round" />
        {/* eyes */}
        <g className="eyes">
          <ellipse cx="276" cy="232" rx="9" ry="7" fill="#fff" />
          <ellipse cx="324" cy="232" rx="9" ry="7" fill="#fff" />
          <g className="pupils">
            <circle cx="276" cy="234" r="4.5" fill="#1a1412" />
            <circle cx="324" cy="234" r="4.5" fill="#1a1412" />
          </g>
        </g>
        <path d="M264 216 Q276 210 288 216 M312 216 Q324 210 336 216" fill="none" stroke="#1a1412" strokeWidth="4" strokeLinecap="round" />
        {/* headset */}
        <g className="headset">
          <path d="M234 236 Q236 150 300 148 Q364 150 366 236" fill="none" stroke="#2b3a4f" strokeWidth="10" strokeLinecap="round" />
          <rect x="222" y="222" width="24" height="42" rx="10" fill="#2b3a4f" />
          <rect x="354" y="222" width="24" height="42" rx="10" fill="#2b3a4f" />
          <rect x="358" y="228" width="16" height="30" rx="6" fill="#6cc6e8" opacity=".6" />
        </g>
      </g>

      {/* desk + laptop (in front of everything) */}
      <rect x="40" y="470" width="520" height="20" rx="6" fill="#d7e2ee" />
      <path d="M196 362 L404 362 L416 470 L184 470 Z" fill="#c3d0de" />
      <path d="M204 370 L396 370 L406 462 L194 462 Z" fill="#b3c2d3" />
      <circle cx="300" cy="414" r="10" fill="#9fb1c6" />
    </svg>
  )
}
