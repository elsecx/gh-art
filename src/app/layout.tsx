import React from "react";
import { fontVariables } from "@/config/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { appMeta } from "@/config/metadata";
import "./globals.css";

interface RootLayoutProps {
    readonly children: React.ReactNode;
}

export const metadata = {
    title: appMeta.name,
    description: appMeta.description,
    keywords: appMeta.keywords,
    openGraph: appMeta.og,
    icons: {
        icon: appMeta.favicon,
    },
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${fontVariables} antialiased`}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
