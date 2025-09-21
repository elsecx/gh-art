import React from "react";
import Link from "next/link";
import { AxeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { appMeta } from "@/config/metadata";

export const metadata = {
    title: `Home - ${appMeta.name}`,
};

const HomePage = () => {
    return (
        <main className="_blank">
            <h1 className="font-jersey mb-3 text-6xl">Home Page</h1>
            <Button variant="outline" asChild>
                <Link href="https://nextjs.org/docs" target="_blank">
                    <AxeIcon />
                    Read Docs
                </Link>
            </Button>
        </main>
    );
};

export default HomePage;
