import React from "react";

import { appMeta } from "@/config/metadata";
import PageWrapper from "@/components/ui/page-wrapper";

export const metadata = {
    title: `Home - ${appMeta.name}`,
};

const HomePage = () => {
    return (
        <>
            <PageWrapper className="px-4">
                <h1 className="font-jersey text-primary mb-3 text-6xl">Home Page</h1>
            </PageWrapper>
            <div style={{ height: "100vh" }}></div>
        </>
    );
};

export default HomePage;
