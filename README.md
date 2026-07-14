# Nuga Skin Clinic — Website

React + Vite + TypeScript (client) · Express (server) · Railway 배포용 단일 서비스 구조.

## 구조
```
nuga-skin-clinic/
├─ package.json        # 루트: client 빌드 + Express start 오케스트레이션
├─ nixpacks.toml       # Railway 빌드 설정
├─ server/index.js     # Express — client/dist 서빙 + /api/contact (Resend 예정)
└─ client/             # Vite + React + TS
   ├─ public/          # 이미지 전부 여기 (경로는 /파일명 형식)
   └─ src/
      ├─ index.css     # 디자인 시스템 (골드+차콜+포슬린, 경락 라인 시그니처)
      └─ Home.tsx      # 홈 전체 (nav·hero·services·reviews·visit·footer)
```

## 로컬 실행
```bash
# 1) 서버
npm install && npm start          # http://localhost:3000

# 2) 프론트 개발 (다른 터미널)
cd client && npm install && npm run dev   # http://localhost:5173
```

## Railway 배포
1. 이 폴더를 GitHub 레포로 push
2. Railway → New Project → Deploy from GitHub repo
3. Nixpacks가 `npm install` → `npm run build` → `npm start` 자동 실행
4. Settings → Networking에서 도메인(nugamedispa.com) 연결
5. (도메인 로그인 확보 후) **nugaskinclinic.com → nugamedispa.com 301 리다이렉트** 설정

## ⚠️ 배포 전 반드시 채울 값 (client/src/Home.tsx 상단 CONFIG)
- [ ] `BOOKING_URL` — 실제 Vagaro 예약 주소 확인
- [ ] `INSTAGRAM` / `FACEBOOK` — 실제 계정 (현재 Wix 기본 링크 폐기)
- [ ] `GOOGLE_REVIEWS` — 구글 리뷰 링크
- [ ] 영업시간(HOURS) — 구글/옐프 기준 입력됨, 실제와 대조
- [ ] 후기 문구 — 예시 → 실제 구글 리뷰(동의받은)로 교체
- [ ] 히어로 사진 — `client/public/hero.jpg` 넣고 `.hero__art` 배경 교체

## 다음 단계 (Phase)
- Phase 2 (진행 중): 콘텐츠·카피 확정
- Phase 3: 나머지 페이지 (About / Services 상세 / Contact)
- Phase 4: `/api/contact`에 Resend 연동 (RESEND_API_KEY 환경변수)
```

© 2026 Nuga Skin Clinic
