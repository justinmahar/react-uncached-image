import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { UncachedImage, UncachedImageProps } from '../components/UncachedImage';

function renderComponent(
  props: UncachedImageProps & React.ImgHTMLAttributes<HTMLImageElement>,
  children: React.ReactNode = undefined
): RenderResult {
  return render(<UncachedImage {...props}>{children}</UncachedImage>);
}

describe('UncachedImage', () => {
  test('should render without crashing', async () => {
    const props: UncachedImageProps & React.ImgHTMLAttributes<HTMLImageElement> = {
      src: 'https://loremflickr.com/320/240',
      alt: 'placeholder',
    };
    const children: React.ReactNode = undefined;
    const renderResult = renderComponent(props, children);
    expect(renderResult.container).toBeInTheDocument();
  });
});
