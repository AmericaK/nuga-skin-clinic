import Home from "./Home";
import About from "./About";
import Treatment from "./Treatment";
import Deals from "./Deals";
import Contact from "./Contact";

// Lightweight routing — branch by pathname (server SPA fallback covers all routes).
export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "");
  if (path === "/about") return <About />;
  if (path === "/deals") return <Deals />;
  if (path === "/contact") return <Contact />;
  if (path.startsWith("/treatments/")) {
    const slug = decodeURIComponent(path.slice("/treatments/".length));
    return <Treatment slug={slug} />;
  }
  return <Home />;
}
