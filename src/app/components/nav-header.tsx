import * as fs from "node:fs";
import React, {JSX} from "react";
import {parseMarkdownAsContent, parseYamlContentAsSkin, RenderingPage, RenderingPriority} from "nodoku-core";
import {NdTranslatableText} from "nodoku-core";
import {NdImageProvider} from "nodoku-core";
import {NdI18nextProvider} from "nodoku-core";
import {NdI18NextPostProcessor} from "nodoku-core";
import {NdHtmlSanitizer} from "nodoku-core";
import {NdPageSkin} from "nodoku-core";
import {NdContentBlock} from "nodoku-core";
import {nodokuComponentResolver} from "@/nodoku-component-resolver"
import {commonImageProvider} from "@/app/components/common-provider";
import {commonHtmlSanitizer} from "@/app/components/common-provider";
import {nameToIconConverters} from "@/app/components/common-provider";
import {NodokuIcons} from "nodoku-icons";


var runsOnServerSide = typeof window === 'undefined';
if (!runsOnServerSide) {
    throw new Error("in [lng]/page.tsx this config is intended on server side only");
}

export type NavHeaderMenuItem = {
    label: NdTranslatableText;
    link: string;
    subItems: NavHeaderMenuItem[];
}

export type NavHeaderProps = {
    lng: string;

    menuItems: NavHeaderMenuItem[]
    themeButton: JSX.Element;
    languageSwitcher: JSX.Element;
    userAccount: JSX.Element;

    imageProvider: NdImageProvider | undefined;
    i18nextProvider: NdI18nextProvider | undefined;
    i18nextPostProcessor: NdI18NextPostProcessor | undefined;
    htmlSanitizer: NdHtmlSanitizer | undefined;

}



export default async function NavHeader(/*params: {lng: string, languages: LanguageDef[]}*/): Promise<JSX.Element> {

    const skin: NdPageSkin = parseYamlContentAsSkin(fs.readFileSync("./public/site/header-footer/nav-header.yaml").toString());
    const content: NdContentBlock[] = parseMarkdownAsContent(fs.readFileSync("./public/site/header-footer/nav-header.md").toString(), "en", "nav-header")

    const clientSideComponentProvider = (c: string) => {
        return <></>
    }

    return (
        <RenderingPage
            lng={"en"}
            renderingPriority={RenderingPriority.skin_first}
            skin={skin}
            content={content}
            componentResolver={nodokuComponentResolver}
            imageProvider={commonImageProvider}
            htmlSanitizer={commonHtmlSanitizer}
            i18nextProvider={undefined}
            i18nextPostProcessor={NodokuIcons.iconTextPostProcessorFactory(nameToIconConverters)}
            clientSideComponentProvider={clientSideComponentProvider}
        />
    );
}

