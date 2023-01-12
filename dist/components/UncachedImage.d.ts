/// <reference types="react" />
import { ImgProps } from 'react-html-props';
export interface UncachedImageProps extends ImgProps {
    /** Optional. You can provide your own cache buster, which will be URI encoded and added as a query parameter. If you make this constant, cache-busting will effectively be disabled. When not specified, one is generated automatically. */
    cacheBuster?: string;
}
/**
 * See documentation: [UncachedImage](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page)
 *
 * An UncachedImage adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.
 */
export declare function UncachedImage({ cacheBuster, ...imgProps }: UncachedImageProps): JSX.Element;
