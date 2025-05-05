import React from "react";
import type {Metadata} from "next";
import NavHeader from "@/app/components/nav-header";
import MyFooter from "@/app/components/my-footer";

import "./globals.css";

export const metadata: Metadata = {
    title: "Nodoku starter template",
    description: "Quick start for Nodoku static site generator",
};

var runsOnServerSide = typeof window === 'undefined';
if (!runsOnServerSide) {
    throw new Error("this config is intended on server side only");
}


export default async function RootLayout({ children/*, params*/ }: Readonly<{ children: React.ReactNode/*, params: Promise<{lng: string}>*/ }>) {

    const actualDir =  "ltr";
    const lng = "en"



    return (
        <html lang={lng} dir={actualDir} className={actualDir}>
        <body className={"bg-white dark:bg-black text-black dark:text-white"} style={{paddingTop: "74px"}}>
            <NavHeader />
            {children}
            <MyFooter />
        </body>
        </html>
    );
}

