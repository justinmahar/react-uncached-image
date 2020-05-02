import * as React from 'react';
export interface UncachedImageProps {
    /** Optional. You can provide your own cache buster, which will be URI encoded and added as a query parameter. If you make this constant, cache-busting will effectively be disabled. When not specified, one is generated automatically. */
    cacheBuster?: React.ReactText;
}
/**
 * See documentation: https://devboldly.github.io/react-uncached-image/
 *
 * An UncachedImage adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.
 */
export declare function UncachedImage({ cacheBuster, ...imgProps }: UncachedImageProps & React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element;
