import React from "react";
import "./globals.css";
import { fontVariables } from "@/config/fonts";

interface RootLayoutProps {
    readonly children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body className={`${fontVariables} antialiased`}>{children}</body>
        </html>
    );
}
