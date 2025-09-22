import React from "react";
import Link from "next/link";
import { AxeIcon } from "lucide-react";

import { appMeta } from "@/config/metadata";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
    title: `Home - ${appMeta.name}`,
};

const HomePage = () => {
    return (
        <main className="_blank">
            <h1 className="font-jersey text-primary mb-3 text-6xl">Home Page</h1>
            <div className="flex gap-3">
                <Button variant="outline" asChild>
                    <Link href="https://nextjs.org/docs" target="_blank">
                        <AxeIcon />
                        Read Docs
                    </Link>
                </Button>
                <ThemeToggle variant="outline" />
            </div>
        </main>
    );
};

export default HomePage;
