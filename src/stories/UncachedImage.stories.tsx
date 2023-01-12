/*
 * More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
 * More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 * More on args: https://storybook.js.org/docs/react/writing-stories/args
 * More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UncachedImage } from '../components/UncachedImage';

export default {
  title: 'Stories/UncachedImage',
  component: UncachedImage,
  parameters: {
    controls: {
      disabled: true,
    },
    options: { showPanel: false },
  },
} as ComponentMeta<typeof UncachedImage>;

export const CachedVsUncachedImages = () => (
  <div>
    <p>
      Image source: <code>https://loremflickr.com/320/240</code>
    </p>
    <p>Cached image:</p>
    <img src="https://loremflickr.com/320/240" alt="placeholder" />
    <img src="https://loremflickr.com/320/240" alt="placeholder" />
    <img src="https://loremflickr.com/320/240" alt="placeholder" />
    <div>
      These three images share the same source. They&apos;ve been cached by your browser and likely repeat three times.
    </div>
    <div>
      <code>{`<img src="https://loremflickr.com/320/240" alt="placeholder" />`}</code>
    </div>
    <p>Uncached image:</p>
    <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
    <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
    <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
    <div>
      These use <code>{`<UncachedImage/>`}</code>, which uses client-side cache busting. They are likely all different.
    </div>
    <div>
      <code>{`<UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />`}</code>
    </div>
  </div>
);
CachedVsUncachedImages.story = {
  name: 'Cached VS Uncached',
};
