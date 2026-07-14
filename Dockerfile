# Nuga Skin Clinic — explicit build (bypasses Railpack auto-detection)
# Railway가 Dockerfile을 감지하면 Railpack 대신 이 파일대로만 빌드/실행합니다.

FROM node:20-slim
WORKDIR /app

# 1) 루트 의존성 (express) — dev 포함
COPY package.json ./
RUN npm install --include=dev

# 2) client 의존성 (react, vite, typescript 등) — dev 포함
COPY client/package.json ./client/package.json
RUN cd client && npm install --include=dev

# 3) 전체 소스 복사 후 client 빌드 (tsc + vite → client/dist 생성)
COPY . .
RUN cd client && npm run build

# 4) 실행: Express가 client/dist 서빙 (PORT는 Railway가 주입)
ENV NODE_ENV=production
CMD ["node", "server/index.js"]
