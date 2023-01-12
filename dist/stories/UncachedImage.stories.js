"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CachedVsUncachedImages = void 0;
/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
const react_1 = __importDefault(require("react"));
const UncachedImage_1 = require("../components/UncachedImage");
exports.default = {
    title: 'Stories/UncachedImage',
    component: UncachedImage_1.UncachedImage,
    parameters: {
        controls: {
            disabled: true,
        },
        options: { showPanel: false },
    },
};
const CachedVsUncachedImages = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("p", null,
        "Image source: ",
        react_1.default.createElement("code", null, "https://loremflickr.com/320/240")),
    react_1.default.createElement("p", null, "Cached image:"),
    react_1.default.createElement("img", { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement("img", { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement("img", { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement("div", null, "These three images share the same source. They've been cached by your browser and likely repeat three times."),
    react_1.default.createElement("div", null,
        react_1.default.createElement("code", null, `<img src="https://loremflickr.com/320/240" alt="placeholder" />`)),
    react_1.default.createElement("p", null, "Uncached image:"),
    react_1.default.createElement(UncachedImage_1.UncachedImage, { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement(UncachedImage_1.UncachedImage, { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement(UncachedImage_1.UncachedImage, { src: "https://loremflickr.com/320/240", alt: "placeholder" }),
    react_1.default.createElement("div", null,
        "These use ",
        react_1.default.createElement("code", null, `<UncachedImage/>`),
        ", which uses client-side cache busting. They are likely all different."),
    react_1.default.createElement("div", null,
        react_1.default.createElement("code", null, `<UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />`))));
exports.CachedVsUncachedImages = CachedVsUncachedImages;
exports.CachedVsUncachedImages.story = {
    name: 'Cached VS Uncached',
};
