import Home from "./Home";
import About from "./About";
import Treatment from "./Treatment";

// 초경량 라우팅 — 경로만으로 페이지 분기 (서버 SPA 폴백으로 모든 경로 동작).
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path === "/about") return <About />;
  if (path.startsWith("/treatments/")) {
    const slug = decodeURIComponent(path.slice("/treatments/".length));
    return <Treatment slug={slug} />;
  }
  return <Home />;
}
