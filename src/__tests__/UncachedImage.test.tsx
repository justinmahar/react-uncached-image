import { render, RenderResult } from '@testing-library/react';
import React from 'react';
import { UncachedImage, UncachedImageProps } from '../components/UncachedImage';

// Learn how to test React components:
// https://testing-library.com/docs/react-testing-library/intro

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
