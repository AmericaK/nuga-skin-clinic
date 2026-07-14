import Home from "./Home";
import About from "./About";

// 초경량 라우팅 — 라이브러리 없이 경로만으로 페이지 분기.
// 서버가 모든 경로에 index.html을 돌려주므로(SPA 폴백) /about 도 정상 동작하고,
// 페이지 이동은 일반 링크(<a href="/about">)로 처리됩니다.
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  return path === "/about" ? <About /> : <Home />;
}
