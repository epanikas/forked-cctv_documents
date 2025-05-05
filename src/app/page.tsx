import * as fs from "node:fs";
import React, {JSX} from "react";
import {parseMarkdownAsContent, parseYamlContentAsSkin, RenderingPage, RenderingPriority} from "nodoku-core";
import {NdPageSkin} from "nodoku-core";
import {NdContentBlock} from "nodoku-core";
import {NdList} from "nodoku-core";
import {nodokuComponentResolver} from "@/nodoku-component-resolver"
import {commonImageProvider} from "@/app/components/common-provider";
import {commonHtmlSanitizer} from "@/app/components/common-provider";
import {nameToIconConverters} from "@/app/components/common-provider";
import {NodokuIcons} from "nodoku-icons";

var runsOnServerSide = typeof window === 'undefined';
if (!runsOnServerSide) {
    throw new Error("in [lng]/page.tsx this config is intended on server side only");
}


export default async function Home(/*{params}: { params: Promise<{ lng: string }> }*/): Promise<JSX.Element> {

    const skin: NdPageSkin = parseYamlContentAsSkin(fs.readFileSync("./public/site/nodoku-landing.yaml").toString());
    const content: NdContentBlock[] = parseMarkdownAsContent(fs.readFileSync("./public/site/nodoku-landing.md").toString(), "en", "nodoku-landing")

    console.log("rendering content: \n", content.map(b => `b.id ${b.id} b.list ${b.paragraphs.filter(p => p instanceof NdList).map(l => l.items == undefined ? "list with no items!!!" : "ok").join(", ")}`).join('\n'));

    return <RenderingPage
                lng={"en"}
                renderingPriority={RenderingPriority.skin_first}
                skin={skin}
                content={content}
                componentResolver={nodokuComponentResolver}
                imageProvider={commonImageProvider}
                htmlSanitizer={commonHtmlSanitizer}
                i18nextProvider={undefined}
                i18nextPostProcessor={NodokuIcons.iconTextPostProcessorFactory(nameToIconConverters)}
                clientSideComponentProvider={undefined}
            />;
}

