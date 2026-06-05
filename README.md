# 👁️ 자세히 봐 (AI 기반 실시간 자세 코칭 SaaS 랜딩페이지)

> **"더 늦기 전에, 당신의 자세를 '자세히' 보세요."**  
> **자세히 봐**는 딥러닝 기반 실시간 관절 인식(Vision AI) 기술과 정형외과 전문 RAG 챗봇을 결합한 스마트 자세 교정 솔루션의 소개 및 체험을 위한 SaaS 랜딩페이지입니다.  
> 강렬한 색감과 두꺼운 테두리, 하드 섀도우(Hard Shadow)가 특징인 **네오 브루탈리즘(Neo-Brutalism)** 스타일로 구현되어 감각적이고 트렌디한 사용자 경험(UX)을 선사합니다.
<img width="2372" height="3682" alt="스크린샷_5-6-2026_144527_ch08-saas-landing-page vercel app" src="https://github.com/user-attachments/assets/60e45c20-d66f-47ef-a0ae-0e84b776f6d0" />

---

## ✨ 핵심 기능 (Key Features)

1. **실시간 AI 포스처 엔진 인터랙티브 데모 (Interactive Demo)**
   - 페이지 내에서 `Good` / `Bad` 자세 버튼을 클릭해 실시간 AI 분석 환경을 간접적으로 경험할 수 있습니다.
   - 자세 상태에 따라 역동적으로 변화하는 SVG 캐릭터(스틱맨) 애니메이션과 분석 정확도(Accuracy) 바가 제공됩니다.
   - 우측의 챗봇 메신저 영역에서 자세 상태에 따른 AI 코치(Posture Coach)의 맞춤 피드백 시뮬레이션을 확인할 수 있습니다.

2. **Vision AI 기반 관절 추출**
   - 딥러닝 기술을 기반으로 사용자의 미세한 관절 움직임을 3D 랜드마크로 정밀하게 추적합니다.

3. **WebRTC 미러링 (Mirroring)**
   - 지연 시간 없는(Zero-latency) 비디오 스트리밍 전송 기술을 적용하여 실시간으로 끊김 없는 자세 피드백을 전달합니다.

4. **RAG + LangChain 전문 건강 가이드**
   - 수만 건의 전문 정형외과 지식 베이스를 검색하여, 사용자의 잘못된 자세 패턴에 매칭되는 가장 안전하고 정확한 스트레칭과 가이드를 생성합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

### 프론트엔드 (Frontend)
- **Next.js** `v16.2.6` (App Router)
- **React** `v19.2.4`
- **TypeScript**
- **Tailwind CSS** `v4.0.0` (네오 브루탈리즘 스타일 커스텀 테마 적용)
- **Lucide React** (벡터 아이콘 셋 라이브러리)

---

## 📂 프로젝트 구조 (Folder Structure)

```text
ch08-saas-landing-page/
├── app/
│   ├── favicon.ico
│   ├── globals.css      # 글로벌 스타일 파일 및 Tailwind 설정
│   ├── layout.tsx       # 공통 레이아웃 컴포넌트
│   └── page.tsx         # 메인 랜딩페이지 구성 및 인터랙티브 데모 로직
├── components/
│   ├── DemoIllustration.tsx   # 데모 섹션 관련 그래픽 요소
│   ├── FAQ.tsx                # 자주 묻는 질문(FAQ) 아코디언 컴포넌트
│   └── HeroIllustration.tsx   # 메인 히어로 영역 일러스트 요소
├── public/
│   └── hero_illustration.png  # 히어로 영역 백그라운드 이미지
├── tsconfig.json        # 타입스크립트 환경 설정 파일
├── package.json         # 의존성 패키지 정의 파일
└── README.md            # 프로젝트 소개 파일 (현재 파일)
```

---

## 🚀 시작하기 (Getting Started)

### 의존성 패키지 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```
- 브라우저를 열고 [http://localhost:3000](http://localhost:3000)으로 접속하여 실행 화면을 확인합니다.

### 프로덕션 빌드 및 실행
```bash
npm run build
npm run start
```
