import { useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Treatment from "./Treatment";
import Deals from "./Deals";
import Contact from "./Contact";

// Lightweight routing — branch by pathname (server SPA fallback covers all routes).
export default function App() {
  // Mobile hamburger: toggle the menu open/closed across every page (delegated).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const burger = t.closest(".nav__burger");
      if (burger) {
        burger.closest(".nav")?.classList.toggle("is-open");
        return;
      }
      const openNav = document.querySelector(".nav.is-open");
      if (!openNav) return;
      // close when tapping a menu link or anywhere outside the menu
      if (t.closest(".nav__links a") || !t.closest(".nav__links")) {
        openNav.classList.remove("is-open");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

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
