import localFont from "next/font/local";

export const akkuratLl = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Akkurat/AkkuratLLWeb-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Akkurat/AkkuratLLWeb-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Akkurat/AkkuratLLWeb-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  fallback: ["Helvetica", "sans-serif"],
  adjustFontFallback: false,
  variable: "--akkuratLl",
});

export const goudyOldStyle = localFont({
  src: "../../public/assets/fonts/GoudyOldStyleStdRoman/GoudyOldStyleStdRoman.woff2",
  style: "normal",
  display: "swap",
  fallback: ["Times", "serif"],
  adjustFontFallback: false,
  variable: "--goudyOldStyle",
});

export const recklessNeue = localFont({
  src: [
    {
      path: "../../public/assets/fonts/RecklessNeue/RecklessNeue-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/RecklessNeue/RecklessNeue-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
  variable: "--recklessNeue",
});
