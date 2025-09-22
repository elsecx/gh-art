import React from "react";
import { fontVariables } from "@/config/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

interface RootLayoutProps {
    readonly children: React.ReactNode;
}

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
