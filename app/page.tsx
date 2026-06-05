"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type Message = {
  cls: string;
  text: string;
};

const goodMessages: Message[] = [
  { cls: "bot", text: "자세 분석 완료! 현재 바른 자세를 유지하고 있어요." },
  { cls: "bot tip", text: "척추 정렬 100% - 이 자세를 유지하면 목 통증을 예방할 수 있어요." },
];

const badMessages: Message[] = [
  { cls: "bot", text: "자세 이상 감지! 머리가 약 7cm 앞으로 나와 있어요." },
  { cls: "bot", text: "거북목 주의! 턱을 살짝 당기고, 등을 의자 등받이에 밀착시켜 보세요." },
];

export default function Home() {
  const [posture, setPosture] = useState<"good" | "bad">("good");
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const chatMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([]);
    const msgs = posture === "good" ? goodMessages : badMessages;
    msgs.forEach((m, i) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, m]);
        if (chatMessagesRef.current) {
          chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
      }, 100 + i * 450);
    });
  }, [posture]);

  const handleSendMessage = () => {
    const val = inputValue.trim();
    if (!val) return;
    setMessages((prev) => [...prev, { cls: "user", text: val }]);
    setInputValue("");
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { cls: "bot", text: "스트레칭 가이드를 제공할게요! 목을 천천히 돌려보세요." },
      ]);
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#fdf4f0] text-[#1a1a1a] font-sans selection:bg-[#1a1a1a] selection:text-white">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-[#fdf4f0] border-b-2 border-[#1a1a1a] px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-[family-name:var(--font-gaegu)] font-bold text-3xl">
          <span className="bg-[#f27255] text-white px-2 py-0.5 border-2 border-[#1a1a1a] rounded-md shadow-[3px_3px_0_0_#1a1a1a] -rotate-2">
            자세
          </span>
          <span>히 봐</span>
        </div>
        <nav className="flex items-center gap-8 text-sm font-bold">
          <a href="#demo" className="text-[#f27255] border-b-2 border-[#f27255] pb-0.5 hover:opacity-80 transition">
            체험하기
          </a>
          <a href="#features" className="text-[#666] hover:text-[#1a1a1a] transition">
            기능 소개
          </a>
          <a
            href="#cta"
            className="bg-[#f27255] text-white px-5 py-2.5 rounded-full border-2 border-[#1a1a1a] shadow-[4px_4px_0_0_#1a1a1a] hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#1a1a1a] active:translate-y-1 active:shadow-[1px_1px_0_0_#1a1a1a] transition-all"
          >
            무료 시작
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="bg-[#e2f3e8] border-b-2 border-[#1a1a1a] px-8 py-20 flex justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div className="flex flex-col items-start gap-6">
            <div className="bg-[#30cfaf] text-white text-xs font-bold px-3 py-1.5 rounded-full border-2 border-[#1a1a1a] flex items-center gap-2 shadow-[2px_2px_0_0_#1a1a1a]">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              AI 기반 자세 분석 서비스 #1
            </div>

            <h1 className="font-[family-name:var(--font-gaegu)] text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              지금 당신의 <span className="bg-[#fce4ec] px-2 py-1 border-2 border-[#1a1a1a] shadow-[4px_4px_0_0_#1a1a1a] inline-block -rotate-1 rounded-md">자세히</span>,<br />
              <span className="bg-[#fff59d] px-2 py-1 border-2 border-[#1a1a1a] shadow-[4px_4px_0_0_#1a1a1a] inline-block rotate-1 rounded-md mt-2">실시간 코칭</span>으로 바로<br />
              잡아드려요!
            </h1>

            <p className="text-[#555] font-medium leading-relaxed max-w-md text-sm mt-2">
              거북목, 굽은 등 걱정은 이제 그만. AI가 당신의 자세를 24시간 감시하며 최적의 스트레칭 시점을 알려줍니다.
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <div className="bg-[#fdf4f0] text-sm font-bold border-2 border-[#1a1a1a] rounded-full px-4 py-2 shadow-[3px_3px_0_0_#1a1a1a] flex items-center gap-2">
                <span className="text-[#f27255]">✓</span> 98% 효과
              </div>
              <div className="bg-[#30cfaf] text-white text-sm font-bold border-2 border-[#1a1a1a] rounded-full px-4 py-2 shadow-[3px_3px_0_0_#1a1a1a] flex items-center gap-2">
                <span className="text-white">⚡</span> 3초 분석
              </div>
              <div className="bg-[#80deea] text-sm font-bold border-2 border-[#1a1a1a] rounded-full px-4 py-2 shadow-[3px_3px_0_0_#1a1a1a] flex items-center gap-2">
                <span className="text-[#1a1a1a]">✨</span> 무료
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative border-4 border-[#1a1a1a] rounded-xl overflow-hidden shadow-[8px_8px_0_0_#1a1a1a] bg-white h-[400px]">
            <Image 
              src="/hero_illustration.png" 
              alt="Woman working at laptop illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* DEMO SECTION */}
      <section id="demo" className="bg-[#faeceb] border-b-2 border-[#1a1a1a] py-24 flex flex-col items-center px-8">
        <div className="text-center mb-10">
          <div className="bg-[#1a1a1a] text-white text-xs font-bold px-4 py-2 rounded-full inline-block mb-3 shadow-[2px_2px_0_0_#30cfaf]">
            Interactive Demo
          </div>
          <h2 className="font-[family-name:var(--font-gaegu)] text-3xl font-bold">실시간 AI 포스처 엔진</h2>
        </div>

        <div className="max-w-5xl w-full bg-white border-4 border-[#1a1a1a] rounded-2xl shadow-[10px_10px_0_0_#1a1a1a] overflow-hidden grid md:grid-cols-2">
          
          {/* Posture Vis (Left) */}
          <div className="border-r-4 border-[#1a1a1a] p-8 flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <div className="flex border-2 border-[#1a1a1a] rounded-full overflow-hidden font-bold text-sm shadow-[2px_2px_0_0_#1a1a1a]">
                <button 
                  onClick={() => setPosture("good")}
                  className={`px-4 py-1.5 transition ${posture === 'good' ? 'bg-[#30cfaf] text-white border-r-2 border-[#1a1a1a]' : 'bg-white hover:bg-gray-100 border-r-2 border-[#1a1a1a]'}`}
                >Good</button>
                <button 
                  onClick={() => setPosture("bad")}
                  className={`px-4 py-1.5 transition ${posture === 'bad' ? 'bg-[#f27255] text-white' : 'bg-white hover:bg-gray-100'}`}
                >Bad</button>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
                <div className="w-2.5 h-2.5 bg-[#30cfaf] rounded-full animate-pulse" />
                LIVE ANALYSIS
              </div>
            </div>

            <div className="flex-1 border-2 border-[#1a1a1a] rounded-xl bg-[#f5f5f5] flex items-center justify-center p-6 relative overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-32 h-32 overflow-visible">
                {/* Stickman base */}
                <rect x="20" y="70" width="30" height="20" fill="none" stroke="#1a1a1a" strokeWidth="2" /> {/* chair */}
                <line x1="35" y1="70" x2="35" y2="90" stroke="#1a1a1a" strokeWidth="2" /> {/* chair leg */}
                
                {posture === "good" ? (
                  <g className="transition-all duration-300">
                    <line x1="40" y1="70" x2="40" y2="35" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* body */}
                    <circle cx="40" cy="22" r="8" fill="none" stroke="#1a1a1a" strokeWidth="4" /> {/* head */}
                    <circle cx="40" cy="22" r="3" fill="#30cfaf" /> {/* head dot */}
                    <path d="M40 45 L55 55 L70 55" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /> {/* arm */}
                    <line x1="40" y1="70" x2="60" y2="70" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* thigh */}
                    <line x1="60" y1="70" x2="60" y2="90" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* calf */}
                  </g>
                ) : (
                  <g className="transition-all duration-300">
                    <path d="M40 70 Q35 50 45 40" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* hunched body */}
                    <circle cx="53" cy="28" r="8" fill="none" stroke="#1a1a1a" strokeWidth="4" /> {/* forward head */}
                    <circle cx="53" cy="28" r="3" fill="#f27255" /> {/* head dot */}
                    <path d="M43 45 L50 60 L65 60" fill="none" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" /> {/* drooping arm */}
                    <line x1="40" y1="70" x2="60" y2="70" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* thigh */}
                    <line x1="60" y1="70" x2="60" y2="90" stroke="#1a1a1a" strokeWidth="4" strokeLinecap="round" /> {/* calf */}
                  </g>
                )}
              </svg>

              {/* Accuracy bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-2 border-[#1a1a1a] rounded-full flex items-center px-4 py-2 gap-3 shadow-[2px_2px_0_0_#1a1a1a]">
                <span className="text-xs font-bold shrink-0">정확도: 99.2%</span>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                  <div className="h-full bg-[#30cfaf] w-[99%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Chat (Right) */}
          <div className="p-8 flex flex-col gap-6 bg-[#fffaf5]">
            <div className="flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-4">
              <div className="w-8 h-8 rounded-full bg-[#f27255] border-2 border-[#1a1a1a] flex items-center justify-center shadow-[1px_1px_0_0_#1a1a1a]">
                <span className="text-white text-xs">🤖</span>
              </div>
              <span className="font-bold text-sm">Posture Coach</span>
            </div>

            <div className="flex-1 flex flex-col gap-4 overflow-y-auto" ref={chatMessagesRef}>
              <div className="bg-white border-2 border-[#1a1a1a] p-3 text-sm rounded-xl rounded-tl-none shadow-[3px_3px_0_0_#1a1a1a] max-w-[85%] self-start">
                안녕하세요! 현재 당신의 어깨가 5도 가량 왼쪽으로 기울어져 있어요. 잠시 스트레칭을 해볼까요?
              </div>
              {messages.map((m, i) => (
                <div key={i} className={`p-3 text-sm rounded-xl border-2 border-[#1a1a1a] shadow-[3px_3px_0_0_#1a1a1a] max-w-[85%] ${
                  m.cls.includes('user') 
                    ? 'bg-[#f27255] text-white rounded-tr-none self-end' 
                    : 'bg-white rounded-tl-none self-start'
                }`}>
                  {m.text}
                </div>
              ))}
            </div>

            <div className="border-2 border-[#1a1a1a] rounded-full bg-white flex items-center p-1.5 shadow-[4px_4px_0_0_#1a1a1a]">
              <input 
                type="text" 
                placeholder="자세에 대해 물어보세요..." 
                className="flex-1 bg-transparent px-4 py-2 text-sm outline-none"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                onClick={handleSendMessage}
                className="w-10 h-10 rounded-full bg-[#8b4a3f] border-2 border-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#6c3930] transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="bg-[#fdf4f0] border-b-2 border-[#1a1a1a] py-24 px-8 flex justify-center">
        <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8">
          
          <div className="bg-white border-4 border-[#1a1a1a] rounded-2xl p-8 shadow-[8px_8px_0_0_#1a1a1a] neo-brutal-hover">
            <div className="w-14 h-14 bg-[#e2f3e8] border-2 border-[#1a1a1a] rounded-xl flex items-center justify-center shadow-[4px_4px_0_0_#1a1a1a] mb-6 text-2xl">
              👁️
            </div>
            <h3 className="font-[family-name:var(--font-gaegu)] text-2xl font-bold mb-3">Vision AI</h3>
            <p className="text-sm text-[#555] leading-relaxed">
              딥러닝 기반의 정교한 관절 추출 기술로 미세한 자세 변화까지 실시간으로 감지합니다.
            </p>
          </div>

          <div className="bg-[#faeceb] border-4 border-[#1a1a1a] rounded-2xl p-8 shadow-[8px_8px_0_0_#1a1a1a] neo-brutal-hover">
            <div className="w-14 h-14 bg-white border-2 border-[#1a1a1a] rounded-xl flex items-center justify-center shadow-[4px_4px_0_0_#1a1a1a] mb-6 text-2xl">
              📡
            </div>
            <h3 className="font-[family-name:var(--font-gaegu)] text-2xl font-bold mb-3">WebRTC Mirroring</h3>
            <p className="text-sm text-[#555] leading-relaxed">
              지연 없는 영상 전송 기술을 통해 끊김 없는 실시간 코칭 경험을 제공합니다.
            </p>
          </div>

          <div className="bg-[#e2fef4] border-4 border-[#1a1a1a] rounded-2xl p-8 shadow-[8px_8px_0_0_#1a1a1a] neo-brutal-hover">
            <div className="w-14 h-14 bg-[#cbf2ea] border-2 border-[#1a1a1a] rounded-xl flex items-center justify-center shadow-[4px_4px_0_0_#1a1a1a] mb-6 text-2xl">
              🧠
            </div>
            <h3 className="font-[family-name:var(--font-gaegu)] text-2xl font-bold mb-3">RAG + LangChain</h3>
            <p className="text-sm text-[#555] leading-relaxed">
              수만 건의 정형외과 전문 데이터를 바탕으로 신뢰할 수 있는 건강 가이드를 제시합니다.
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section id="cta" className="bg-[#fdf4f0] py-24 px-8 flex justify-center">
        <div className="max-w-4xl w-full bg-gradient-to-br from-[#f27255] via-[#ffb38a] to-[#f4d4ba] border-4 border-[#1a1a1a] rounded-[2rem] p-16 text-center shadow-[12px_12px_0_0_#1a1a1a] flex flex-col items-center">
          <h2 className="font-[family-name:var(--font-gaegu)] text-4xl font-bold mb-4 text-[#1a1a1a]">
            더 늦기 전에, 당신의 자세를 '자세히' 보세요
          </h2>
          <p className="text-[#1a1a1a] text-sm font-medium mb-10 max-w-lg leading-relaxed opacity-90">
            지금 바로 무료로 시작하고, 일주일 만에 달라지는 컨디션을 직접 경험해 보세요. 당신의 건강한 일상을 응원합니다.
          </p>
          <button className="bg-white text-[#1a1a1a] font-bold px-8 py-4 rounded-xl border-2 border-[#1a1a1a] shadow-[5px_5px_0_0_#1a1a1a] hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#1a1a1a] active:translate-y-1 active:shadow-[2px_2px_0_0_#1a1a1a] transition-all flex items-center gap-3">
            Start for Free <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#fdf4f0] border-t-2 border-[#1a1a1a] px-10 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-1 font-[family-name:var(--font-gaegu)] font-bold text-2xl">
            <span className="bg-[#f27255] text-white px-2 py-0 border-[1.5px] border-[#1a1a1a] rounded shadow-[2px_2px_0_0_#1a1a1a] -rotate-2">자세</span>
            <span>히 봐</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-[#666]">
            <a href="#" className="hover:text-[#1a1a1a]">이용약관</a>
            <a href="#" className="hover:text-[#1a1a1a]">개인정보처리방침</a>
            <a href="#" className="hover:text-[#1a1a1a]">문의하기</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-8 h-8 rounded-md border-2 border-[#1a1a1a] bg-white shadow-[2px_2px_0_0_#1a1a1a] flex items-center justify-center hover:bg-gray-100 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
            </button>
            <button className="w-8 h-8 rounded-md border-2 border-[#1a1a1a] bg-white shadow-[2px_2px_0_0_#1a1a1a] flex items-center justify-center hover:bg-gray-100 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </button>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-[#888]">
          © 2024 자세히 봐. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
