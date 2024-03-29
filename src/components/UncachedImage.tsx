import * as React from 'react';
import { ImgProps } from 'react-html-props';

export interface UncachedImageProps extends ImgProps {
  /** Optional. You can provide your own cache buster, which will be URI encoded and added as a query parameter. If you make this constant, cache-busting will effectively be disabled. When not specified, one is generated automatically. */
  cacheBuster?: string;
}

/**
 * See documentation: [UncachedImage](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--docs)
 *
 * An UncachedImage adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.
 */
export function UncachedImage({ cacheBuster, ...imgProps }: UncachedImageProps): JSX.Element {
  let src = imgProps.src;
  if (typeof src === 'string') {
    cacheBuster = cacheBuster ?? randChars(10);
    const paramSymbol = src.indexOf('?') >= 0 ? '&' : '?';
    src = `${src}${paramSymbol}${encodeURIComponent(cacheBuster)}`;
  }
  return <img {...imgProps} src={src} alt={imgProps.alt} />;
}

/**
 * Generate a string of random alphanumeric characters, of the length provided.
 *
 * @param length The length of the string.
 */
const randChars = (length: number): string => {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};
