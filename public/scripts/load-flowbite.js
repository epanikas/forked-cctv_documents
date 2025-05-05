// import {initCarousels} from "../../node_modules/flowbite/lib/esm/components/carousel/index.js";
// import {initCarousels} from "/scripts/flowbite-carousel-index.js";
// const initCarousels = require("../../node_modules/flowbite/lib/esm/components/carousel/index.js")
// import * as flowbite from "./flowbite.js";
// import * as events from "./events.js";
// import * as inst from "./instances.js";
// import {initCarousels} from "./flowbite/lib/esm/components/carousel/index.js"

// import { initAccordions } from './flowbite/lib/esm/components/accordion/index.js';
// import { initCollapses } from './flowbite/lib/esm/components/collapse/index.js';
// import { initCarousels } from './flowbite/lib/esm/components/carousel/index.js';
// import { initDismisses } from './flowbite/lib/esm/components/dismiss/index.js';
// import { initDropdowns } from './flowbite/lib/esm/components/dropdown/index.js';
// import { initModals } from './flowbite/lib/esm/components/modal/index.js';
// import { initDrawers } from './flowbite/lib/esm/components/drawer/index.js';
// import { initTabs } from './flowbite/lib/esm/components/tabs/index.js';
// import { initTooltips } from './flowbite/lib/esm/components/tooltip/index.js';
// import { initPopovers } from './flowbite/lib/esm/components/popover/index.js';
// import { initDials } from './flowbite/lib/esm/components/dial/index.js';
// import { initInputCounters } from './flowbite/lib/esm/components/input-counter/index.js';
// import { initCopyClipboards } from './flowbite/lib/esm/components/clipboard/index.js';
// import { initDatepickers } from './flowbite/lib/esm/components/datepicker/index.js';

import carousel from "./flowbite/lib/esm/components/carousel/index.js";

window.onload = function() {
    setTimeout(function() {
        console.log('load flowbite');
        // var s = document.createElement('script');
        // console.log("script element created...")
        // s.type = "text/javascript";
        // s.src = "/scripts/flowbite.js";
        // try {
            // document.body.append(s);
            // initCarousels();
            // import("./flowbite.js").then(mod => mod.initCarousels())
            // initCarousels()
        // import("./flowbite/lib/esm/components/carousel/index.js")
        //     .then(carousel => carousel.initCarousels())
        // import("./flowbite/esm/index.js").then(events => events.init())

        initAccordions();
        initCollapses();
        initCarousels();
        initDismisses();
        initDropdowns();
        initModals();
        initDrawers();
        initTabs();
        initTooltips();
        initPopovers();
        initDials();
        initInputCounters();
        initCopyClipboards();
        initDatepickers();

        console.log("load flowbite.min.js: script tag added")
        // } catch (e) {
        //     console.log("can't load flowbite.min.js...", e)
        // }
    }, 100)

}