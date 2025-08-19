import React from "react";
import type {Metadata} from "next";
import NavHeader from "@/app/components/nav-header";
import MyFooter from "@/app/components/my-footer";
import {i18nStore} from "@/app/components/nodoku-server-i18n-config";

import "../globals.css";
import {NodokuI18n} from "nodoku-i18n";
import LanguageDef = NodokuI18n.LanguageDef;

export const metadata: Metadata = {
    title: "Nodoku starter template",
    description: "Quick start for Nodoku static site generator",
};

var runsOnServerSide = typeof window === 'undefined';
if (!runsOnServerSide) {
    throw new Error("this config is intended on server side only");
}

export async function generateStaticParams(): Promise<{lng: string}[]> {


    const params: {lng: string}[] = (await i18nStore.allLanguages())
        .map((l: NodokuI18n.LanguageDef): {lng: string} => ({lng: l.key}));
    // const params = [{lng: "en"}]
    console.log("in generateStaticParams", params.map((p: {lng: string}) => p.lng).join(", "))
    return params;
}


export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: Promise<{lng: string}> }>) {

    const actualDir =  "ltr";
    const { lng } = await params;

    const languages: LanguageDef[] = await i18nStore.allLanguages()

    return (
        <html lang={lng} dir={actualDir} className={actualDir}>
        <body className={"bg-white dark:bg-black text-black dark:text-white"} style={{paddingTop: "74px"}}>
            <NavHeader lng={lng} languages={languages}/>
            {children}
            <MyFooter />
        </body>
        </html>
    );
}

