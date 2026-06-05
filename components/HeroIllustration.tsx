export default function HeroIllustration() {
  return (
    <div className="hero-char">
      <svg viewBox="0 0 360 340" xmlns="http://www.w3.org/2000/svg">
        {/* speech bubble */}
        <rect x="140" y="10" width="200" height="56" rx="16" fill="#FFE566" stroke="#1A1A2E" strokeWidth="2.5" />
        <polygon points="160,66 175,66 168,82" fill="#FFE566" stroke="#1A1A2E" strokeWidth="2" />
        <text x="158" y="34" fontFamily="var(--font-noto-sans-kr)" fontSize="11" fill="#1A1A2E" fontWeight="700">자세가 좀 틀어졌어요!</text>
        <text x="158" y="54" fontFamily="var(--font-noto-sans-kr)" fontSize="10" fill="#555">고개를 5cm 뒤로 당겨봐요</text>

        {/* desk */}
        <rect x="40" y="200" width="280" height="14" rx="6" fill="#D4A574" stroke="#1A1A2E" strokeWidth="2.5" />
        {/* desk legs */}
        <rect x="55" y="214" width="12" height="80" rx="4" fill="#C49060" stroke="#1A1A2E" strokeWidth="2" />
        <rect x="290" y="214" width="12" height="80" rx="4" fill="#C49060" stroke="#1A1A2E" strokeWidth="2" />

        {/* monitor stand */}
        <rect x="168" y="180" width="14" height="22" rx="3" fill="#888" stroke="#1A1A2E" strokeWidth="2" />
        <rect x="152" y="196" width="46" height="6" rx="3" fill="#888" stroke="#1A1A2E" strokeWidth="2" />
        {/* monitor body */}
        <rect x="112" y="108" width="126" height="76" rx="10" fill="#2d2d50" stroke="#1A1A2E" strokeWidth="2.5" />
        <rect x="118" y="114" width="114" height="64" rx="6" fill="#1a1a30" />
        {/* monitor screen glow */}
        <rect x="120" y="116" width="110" height="60" rx="5" fill="url(#screenGrad)" opacity=".9" />
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ABFA0" stopOpacity=".6" />
            <stop offset="100%" stopColor="#1A1A2E" stopOpacity=".9" />
          </linearGradient>
        </defs>
        {/* screen text lines */}
        <rect x="128" y="126" width="60" height="5" rx="2" fill="#3ABFA0" opacity=".8" />
        <rect x="128" y="136" width="90" height="4" rx="2" fill="#aaa" opacity=".5" />
        <rect x="128" y="145" width="70" height="4" rx="2" fill="#aaa" opacity=".4" />
        <rect x="128" y="154" width="50" height="4" rx="2" fill="#FFE566" opacity=".7" />

        {/* keyboard */}
        <rect x="120" y="196" width="88" height="10" rx="4" fill="#ccc" stroke="#1A1A2E" strokeWidth="2" />

        {/* chair seat */}
        <rect x="60" y="218" width="90" height="14" rx="6" fill="#FF7F5E" stroke="#1A1A2E" strokeWidth="2.5" />
        {/* chair back */}
        <rect x="60" y="170" width="14" height="54" rx="5" fill="#FF7F5E" stroke="#1A1A2E" strokeWidth="2.5" />
        {/* chair legs */}
        <line x1="70" y1="232" x2="60" y2="294" stroke="#888" strokeWidth="4" strokeLinecap="round" />
        <line x1="140" y1="232" x2="150" y2="294" stroke="#888" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="294" x2="80" y2="294" stroke="#888" strokeWidth="3" />
        <line x1="130" y1="294" x2="155" y2="294" stroke="#888" strokeWidth="3" />

        {/* person (sitting side view, good posture) */}
        {/* torso upright */}
        <rect x="80" y="164" width="22" height="56" rx="6" fill="#FFD9C0" stroke="#1A1A2E" strokeWidth="2" />
        {/* head */}
        <circle cx="91" cy="148" r="20" fill="#FFD9C0" stroke="#1A1A2E" strokeWidth="2.5" />
        {/* eye */}
        <circle cx="98" cy="146" r="3" fill="#1A1A2E" />
        {/* hair */}
        <path d="M74 140 Q78 125 91 128 Q104 125 108 140" fill="#3D2B1F" stroke="#1A1A2E" strokeWidth="1.5" />
        {/* neck */}
        <rect x="86" y="165" width="10" height="10" rx="3" fill="#FFD9C0" />
        {/* arm */}
        <path d="M80 178 Q60 182 55 196" stroke="#FFD9C0" strokeWidth="9" strokeLinecap="round" fill="none" />
        {/* legs */}
        <path d="M80 220 Q78 250 72 270" stroke="#8B6F5E" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M100 220 Q102 250 108 270" stroke="#8B6F5E" strokeWidth="10" strokeLinecap="round" fill="none" />

        {/* posture check mark */}
        <circle cx="310" cy="240" r="22" fill="#C0F0E8" stroke="#1A1A2E" strokeWidth="2.5" />
        <polyline points="300,240 308,250 322,228" stroke="#3ABFA0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}
