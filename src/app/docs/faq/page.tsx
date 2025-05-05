import fs from "node:fs";
import React, {JSX} from "react";
import {parseMarkdownAsContent, parseYamlContentAsSkin, RenderingPage, RenderingPriority} from "nodoku-core";
import {NdPageSkin} from "nodoku-core";
import {NdContentBlock} from "nodoku-core";
import {nodokuComponentResolver} from "@/nodoku-component-resolver"
import {commonImageProvider} from "@/app/components/common-provider";
import {commonHtmlSanitizer} from "@/app/components/common-provider";
import {nameToIconConverters} from "@/app/components/common-provider";
import {NodokuIcons} from "nodoku-icons";


export const dynamic = "force-static"

export default async function Page(/*{params}: { params: Promise<{ lng: string }> }*/): Promise<JSX.Element> {

    const skin: NdPageSkin = parseYamlContentAsSkin(fs.readFileSync("./public/site/docs/faq.yaml").toString());
    const content: NdContentBlock[] = parseMarkdownAsContent(fs.readFileSync("./public/site/docs/faq.md").toString(), "en", "faq")

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

