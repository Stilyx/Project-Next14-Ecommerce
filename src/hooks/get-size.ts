'use client'

const BREAKPOINTS = {
  DESKTOP: 962,
  TABLET: 600,
};

export function getSize(windowWidth: number): "desktop" | "tablet" | "mobile" {
  if (windowWidth > BREAKPOINTS.DESKTOP) return "desktop";
  if (windowWidth > BREAKPOINTS.TABLET) return "tablet";
  return "mobile";
}
