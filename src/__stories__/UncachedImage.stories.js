import React from 'react';
import { UncachedImage } from '../components/UncachedImage';

// A Storybook is a collection of stories. Each story represents a single visual state of a component.
// Technically, a story is a function that returns something that can be rendered to screen.

// The default export defines metadata that applies to the group.
export default {
  title: 'UncachedImage',
  component: UncachedImage,
};

// The named exports define the stories
export const UncachedImageStory = () => (
  <>
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
  </>
);
UncachedImageStory.story = {
  name: 'UncachedImage',
};
