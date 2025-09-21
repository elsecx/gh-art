import { Inter, Jersey_10 } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const jersey = Jersey_10({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-jersey",
});

export const fonts = {
    inter,
    jersey,
} as const;

export const fontVariables = Object.values(fonts)
    .map((font) => font.variable)
    .join(" ");
