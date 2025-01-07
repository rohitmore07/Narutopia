import { gsap } from "gsap";

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export function animateCharacterEntrance(element: HTMLElement, delay: number = 0) {
  gsap.from(element, {
    duration: 0.6,
    opacity: 0,
    y: 30,
    delay,
    ease: "power2.out",
  });
}