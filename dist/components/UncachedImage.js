"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
/**
 * See documentation: [UncachedImage](https://devboldly.github.io/react-uncached-image/UncachedImage)
 *
 * An UncachedImage adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.
 */
function UncachedImage(_a) {
    var cacheBuster = _a.cacheBuster, imgProps = __rest(_a, ["cacheBuster"]);
    var src = imgProps.src;
    cacheBuster = cacheBuster ? cacheBuster : randChars(10);
    if (typeof src === 'string') {
        var paramSymbol = src.indexOf('?') >= 0 ? '&' : '?';
        src = "" + src + paramSymbol + encodeURIComponent(cacheBuster);
    }
    return React.createElement("img", __assign({}, imgProps, { src: src, alt: imgProps.alt }));
}
exports.UncachedImage = UncachedImage;
/**
 * Generate a string of random alphanumeric characters, of the length provided.
 *
 * @param length The length of the string.
 */
var randChars = function (length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
