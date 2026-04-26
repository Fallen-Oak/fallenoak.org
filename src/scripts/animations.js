import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let matchMediaContext;
let lenis;
let initialized = false;
let rafStarted = false;

const nativeScroller = {
  scrollTo(target) {
    if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: "smooth" });
      return;
    }

    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.scrollTo({ ...target, behavior: target?.behavior ?? "smooth" });
  },
};

export { gsap, ScrollTrigger };

export function getMatchMedia() {
  if (!matchMediaContext) {
    matchMediaContext = gsap.matchMedia();
  }

  window.mm = matchMediaContext;
  return matchMediaContext;
}

export function scrollToTarget(target) {
  (lenis ?? nativeScroller).scrollTo(target);
}

function startLenisRaf() {
  if (rafStarted || !lenis) {
    return;
  }

  rafStarted = true;

  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
}

export function setupAnimationRuntime() {
  if (initialized) {
    return;
  }

  initialized = true;

  window.lenis = nativeScroller;
  window.scrollToTarget = scrollToTarget;
  getMatchMedia();

  if (!ScrollTrigger.isTouch) {
    lenis = new Lenis();
    window.lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    startLenisRaf();
  }

  window.addEventListener(
    "load",
    () => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();
    },
    { once: true }
  );

  document.addEventListener("swup:enable", () => {
    ScrollTrigger.refresh();
  });
}
