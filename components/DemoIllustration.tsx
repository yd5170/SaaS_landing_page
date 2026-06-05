export default function DemoIllustration({ posture }: { posture: "good" | "bad" }) {
  return (
    <div className="posture-svg-wrap">
      <svg id="posture-svg" viewBox="0 0 420 330" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-red">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a3a5a" />
            <stop offset="100%" stopColor="#0a0a20" />
          </linearGradient>
        </defs>

        {/* background room */}
        <rect x="0" y="0" width="420" height="330" fill="#12122a" />
        {/* wall */}
        <rect x="0" y="0" width="420" height="220" fill="#1a1a35" />
        {/* floor */}
        <rect x="0" y="220" width="420" height="110" fill="#16162a" />
        {/* wall/floor edge */}
        <line x1="0" y1="220" x2="420" y2="220" stroke="#2a2a50" strokeWidth="2" />

        {/* DESK */}
        <rect x="190" y="178" width="210" height="12" rx="4" fill="#8B6040" stroke="#4a3020" strokeWidth="2" />
        {/* desk legs */}
        <rect x="195" y="190" width="10" height="80" rx="3" fill="#7a5030" />
        <rect x="390" y="190" width="10" height="80" rx="3" fill="#7a5030" />

        {/* MONITOR stand */}
        <rect x="282" y="160" width="11" height="20" rx="3" fill="#555" stroke="#333" strokeWidth="1.5" />
        <rect x="268" y="174" width="40" height="5" rx="2" fill="#555" stroke="#333" strokeWidth="1.5" />
        {/* MONITOR body */}
        <rect x="222" y="100" width="122" height="64" rx="8" fill="#222240" stroke="#3a3a60" strokeWidth="2.5" />
        <rect x="228" y="106" width="110" height="52" rx="5" fill="#10102a" />
        {/* screen content */}
        <rect x="230" y="108" width="106" height="48" rx="4" fill="url(#sg2)" opacity=".95" />
        
        {/* screen UI lines */}
        <rect x="238" y="116" width="50" height="4" rx="2" fill="#3ABFA0" opacity=".9" />
        <rect x="238" y="124" width="80" height="3" rx="2" fill="#666" opacity=".6" />
        <rect x="238" y="131" width="65" height="3" rx="2" fill="#666" opacity=".5" />
        <rect x="238" y="138" width="40" height="3" rx="2" fill="#FFE566" opacity=".8" />
        <rect x="238" y="145" width="70" height="3" rx="2" fill="#666" opacity=".4" />
        {/* keyboard */}
        <rect x="228" y="174" width="80" height="8" rx="3" fill="#333355" stroke="#444466" strokeWidth="1.5" />
        {/* mouse */}
        <ellipse cx="326" cy="177" rx="10" ry="6" fill="#333355" stroke="#444466" strokeWidth="1.5" />

        {/* CHAIR base/seat */}
        <rect x="80" y="196" width="110" height="12" rx="5" fill="#2d5a8e" stroke="#1a3a6e" strokeWidth="2" />
        {/* chair back */}
        <rect x="82" y="150" width="14" height="50" rx="5" fill="#2d5a8e" stroke="#1a3a6e" strokeWidth="2" />
        {/* armrest */}
        <rect x="160" y="186" width="30" height="7" rx="3" fill="#2d5a8e" stroke="#1a3a6e" strokeWidth="1.5" />
        {/* chair legs */}
        <line x1="90" y1="208" x2="75" y2="270" stroke="#aaa" strokeWidth="4" strokeLinecap="round" />
        <line x1="180" y1="208" x2="195" y2="270" stroke="#aaa" strokeWidth="4" strokeLinecap="round" />
        <line x1="75" y1="270" x2="100" y2="270" stroke="#aaa" strokeWidth="3" />
        <line x1="175" y1="270" x2="200" y2="270" stroke="#aaa" strokeWidth="3" />
        {/* chair wheel */}
        <circle cx="80" cy="272" r="5" fill="#888" stroke="#555" strokeWidth="1.5" />
        <circle cx="196" cy="272" r="5" fill="#888" stroke="#555" strokeWidth="1.5" />

        {/* ========================= */}
        {/* GOOD POSTURE GROUP */}
        {/* ========================= */}
        {posture === "good" && (
          <g id="good-posture">
            {/* PERSON - Good Posture (side view, upright) */}
            {/* feet/shoes */}
            <ellipse cx="148" cy="280" rx="18" ry="7" fill="#3D2B1F" stroke="#1A1A2E" strokeWidth="1.5" />
            <ellipse cx="122" cy="282" rx="14" ry="6" fill="#3D2B1F" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* lower legs */}
            <rect x="136" y="240" width="14" height="44" rx="5" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="112" y="242" width="14" height="42" rx="5" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* thighs (horizontal on seat) */}
            <rect x="112" y="198" width="80" height="16" rx="6" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* torso UPRIGHT */}
            <rect x="110" y="148" width="28" height="54" rx="8" fill="#e8c4a0" stroke="#1A1A2E" strokeWidth="2" />
            {/* shirt */}
            <rect x="110" y="162" width="28" height="42" rx="6" fill="#5a8fd4" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* neck - straight */}
            <rect x="118" y="140" width="12" height="14" rx="4" fill="#e8c4a0" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* head - straight forward */}
            <ellipse cx="128" cy="122" rx="22" ry="24" fill="#f0d0b0" stroke="#1A1A2E" strokeWidth="2.5" />
            {/* hair */}
            <path d="M106 116 Q110 98 128 100 Q146 98 150 116" fill="#2d1a0e" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* ear */}
            <ellipse cx="107" cy="122" rx="5" ry="7" fill="#e8c4a0" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* eye */}
            <circle cx="140" cy="120" r="3.5" fill="#1A1A2E" />
            <circle cx="141" cy="119" r="1" fill="#fff" opacity=".6" />
            {/* nose */}
            <path d="M144 126 Q146 130 143 131" stroke="#c49060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* mouth (smile) */}
            <path d="M136 136 Q140 139 144 136" stroke="#c49060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* arm pointing to keyboard */}
            <path d="M138 172 Q165 182 210 184" stroke="#e8c4a0" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M138 172 Q165 182 210 184" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* hand */}
            <ellipse cx="212" cy="184" rx="10" ry="7" fill="#f0d0b0" stroke="#1A1A2E" strokeWidth="1.5" />

            {/* POSTURE SKELETON LINES (Green = Good) */}
            {/* spine line: straight vertical */}
            <line x1="124" y1="200" x2="124" y2="148" stroke="#3ABFA0" strokeWidth="2.5" strokeDasharray="6,3" opacity=".9" filter="url(#glow)" />
            {/* neck line: straight */}
            <line x1="124" y1="148" x2="128" y2="114" stroke="#3ABFA0" strokeWidth="2.5" strokeDasharray="6,3" opacity=".9" filter="url(#glow)" />
            {/* head dot */}
            <circle cx="128" cy="114" r="5" fill="#3ABFA0" stroke="#fff" strokeWidth="1.5" filter="url(#glow)" />
            {/* hip dot */}
            <circle cx="124" cy="200" r="5" fill="#3ABFA0" stroke="#fff" strokeWidth="1.5" filter="url(#glow)" />
            {/* shoulder dot */}
            <circle cx="124" cy="160" r="5" fill="#3ABFA0" stroke="#fff" strokeWidth="1.5" filter="url(#glow)" />

            {/* 90-degree angle marker at hip */}
            <path d="M134 200 L134 190 L144 190" stroke="#3ABFA0" strokeWidth="1.5" fill="none" opacity=".8" />

            {/* GOOD posture label */}
            <rect x="10" y="10" width="130" height="36" rx="8" fill="rgba(58,191,160,.2)" stroke="#3ABFA0" strokeWidth="2" />
            <circle cx="26" cy="28" r="5" fill="#3ABFA0" />
            <text x="38" y="23" fontFamily="var(--font-noto-sans-kr)" fontSize="9" fill="#3ABFA0" fontWeight="700">바른 자세</text>
            <text x="38" y="38" fontFamily="var(--font-noto-sans-kr)" fontSize="8" fill="#3ABFA0" opacity=".8">척추 정렬 정상</text>

            {/* angle annotation */}
            <text x="152" y="200" fontFamily="var(--font-noto-sans-kr)" fontSize="9" fill="#3ABFA0" opacity=".9">엉덩이 90°</text>
            <text x="140" y="108" fontFamily="var(--font-noto-sans-kr)" fontSize="9" fill="#3ABFA0" opacity=".9">머리 수직</text>
          </g>
        )}

        {/* ========================= */}
        {/* BAD POSTURE GROUP */}
        {/* ========================= */}
        {posture === "bad" && (
          <g id="bad-posture">
            {/* PERSON - Bad Posture (hunched, head forward) */}
            {/* feet/shoes */}
            <ellipse cx="148" cy="280" rx="18" ry="7" fill="#3D2B1F" stroke="#1A1A2E" strokeWidth="1.5" />
            <ellipse cx="122" cy="282" rx="14" ry="6" fill="#3D2B1F" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* lower legs */}
            <rect x="136" y="240" width="14" height="44" rx="5" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            <rect x="112" y="242" width="14" height="42" rx="5" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* thighs */}
            <rect x="112" y="198" width="80" height="16" rx="6" fill="#4a7ab5" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* torso HUNCHED (rotated forward) */}
            <path d="M110 200 Q108 180 120 162 Q128 152 130 148" stroke="#e8c4a0" strokeWidth="26" strokeLinecap="round" fill="none" />
            <path d="M110 200 Q108 180 120 162 Q128 152 130 148" stroke="#5a8fd4" strokeWidth="22" strokeLinecap="round" fill="none" />
            <path d="M110 200 Q108 180 120 162 Q128 152 130 148" stroke="#1A1A2E" strokeWidth="26" strokeLinecap="round" fill="none" opacity=".15" />
            {/* neck FORWARD */}
            <path d="M130 148 Q140 142 148 136" stroke="#e8c4a0" strokeWidth="12" strokeLinecap="round" fill="none" />
            <path d="M130 148 Q140 142 148 136" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* head PROTRUDED forward */}
            <ellipse cx="162" cy="120" rx="22" ry="24" fill="#f0d0b0" stroke="#1A1A2E" strokeWidth="2.5" />
            {/* hair */}
            <path d="M140 114 Q144 96 162 98 Q180 96 184 114" fill="#2d1a0e" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* ear */}
            <ellipse cx="141" cy="120" rx="5" ry="7" fill="#e8c4a0" stroke="#1A1A2E" strokeWidth="1.5" />
            {/* eye */}
            <circle cx="174" cy="118" r="3.5" fill="#1A1A2E" />
            <circle cx="175" cy="117" r="1" fill="#fff" opacity=".6" />
            {/* worried expression */}
            <path d="M168 132 Q172 130 176 132" stroke="#c49060" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            {/* arm to keyboard (drooping) */}
            <path d="M130 174 Q165 188 210 186" stroke="#e8c4a0" strokeWidth="10" strokeLinecap="round" fill="none" />
            <path d="M130 174 Q165 188 210 186" stroke="#1A1A2E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <ellipse cx="212" cy="186" rx="10" ry="7" fill="#f0d0b0" stroke="#1A1A2E" strokeWidth="1.5" />

            {/* POSTURE SKELETON LINES (Red/Orange = Bad) */}
            {/* curved spine */}
            <path d="M120 200 Q108 178 118 160 Q126 150 130 148" stroke="#FF7F5E" strokeWidth="2.5" strokeDasharray="6,3" opacity=".95" fill="none" filter="url(#glow-red)" />
            {/* forward head neck line */}
            <path d="M130 148 Q144 140 162 120" stroke="#FF7F5E" strokeWidth="2.5" strokeDasharray="6,3" opacity=".95" fill="none" filter="url(#glow-red)" />
            {/* head dot */}
            <circle cx="162" cy="120" r="5" fill="#FF7F5E" stroke="#fff" strokeWidth="1.5" filter="url(#glow-red)" />
            {/* hip dot */}
            <circle cx="120" cy="200" r="5" fill="#FF7F5E" stroke="#fff" strokeWidth="1.5" filter="url(#glow-red)" />
            {/* shoulder dot */}
            <circle cx="124" cy="162" r="5" fill="#FF7F5E" stroke="#fff" strokeWidth="1.5" filter="url(#glow-red)" />

            {/* ideal reference line (dotted white = where spine should be) */}
            <line x1="124" y1="200" x2="124" y2="100" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4,6" opacity=".25" />

            {/* Warning angles */}
            {/* neck angle warning */}
            <path d="M130 148 L130 128 Q148 128 162 120" stroke="#FF7F5E" strokeWidth="1" fill="rgba(255,127,94,.1)" opacity=".8" />
            <text x="130" y="145" fontFamily="var(--font-noto-sans-kr)" fontSize="8" fill="#FF7F5E" fontWeight="700">+35°</text>

            {/* back hunch warning arrow */}
            <text x="68" y="174" fontFamily="var(--font-noto-sans-kr)" fontSize="8" fill="#FF7F5E" fontWeight="700">등 굽음</text>
            <line x1="98" y1="172" x2="112" y2="172" stroke="#FF7F5E" strokeWidth="1.5" markerEnd="url(#arr)" />

            {/* BAD posture label */}
            <rect x="10" y="10" width="140" height="52" rx="8" fill="rgba(255,127,94,.2)" stroke="#FF7F5E" strokeWidth="2" />
            <circle cx="26" cy="28" r="5" fill="#FF7F5E" />
            <text x="38" y="23" fontFamily="var(--font-noto-sans-kr)" fontSize="9" fill="#FF7F5E" fontWeight="700">구부정한 자세!</text>
            <text x="16" y="40" fontFamily="var(--font-noto-sans-kr)" fontSize="8" fill="#FF7F5E" opacity=".9">머리 전방돌출 +35°</text>
            <text x="16" y="53" fontFamily="var(--font-noto-sans-kr)" fontSize="8" fill="#FF7F5E" opacity=".9">척추 굴곡 주의</text>

            {/* head forward distance annotation */}
            <line x1="124" y1="120" x2="157" y2="120" stroke="#FFE566" strokeWidth="1.5" strokeDasharray="3,3" />
            <circle cx="124" cy="120" r="3" fill="#FFE566" />
            <circle cx="157" cy="120" r="3" fill="#FFE566" />
            <text x="132" y="116" fontFamily="var(--font-noto-sans-kr)" fontSize="7.5" fill="#FFE566">7cm</text>
          </g>
        )}
      </svg>
    </div>
  );
}
