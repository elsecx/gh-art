"use client";

import React from "react";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

import { appMeta } from "@/config/metadata";
import { Button } from "./button";
import { ThemeToggle } from "../theme-toggle";

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "" }) => {
    const headerRef = React.useRef<HTMLElement>(null);
    const [headerHeight, setHeaderHeight] = React.useState(0);

    React.useEffect(() => {
        const updateHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    return (
        <>
            <header
                ref={headerRef}
                className="bg-secondary fixed top-0 flex w-full items-center justify-between p-4"
            >
                <Link href="/">
                    <h1 className="font-jersey text-primary text-4xl">{appMeta.name}</h1>
                </Link>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <Button variant="outline" asChild>
                        <Link href="https://github.com/elsecx/gh-art" target="_blank">
                            <GithubIcon />
                            Github
                        </Link>
                    </Button>
                </div>
            </header>

            <main className={className} style={{ marginTop: headerHeight }}>
                {children}
            </main>
        </>
    );
};

export default PageWrapper;
