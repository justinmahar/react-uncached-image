import React from 'react';
import { UncachedImage } from '../components/UncachedImage';
import type { Meta, StoryObj } from '@storybook/react';

// === Setup ===
const StoryComponent = UncachedImage; // <-- Set to your component
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/UncachedImage', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const CachedVsUncachedImages: Story = {
  name: 'Cached VS Uncached',
  render: () => (
    <div>
      <p>
        Image source: <code>https://loremflickr.com/320/240</code>
      </p>
      <p>Cached image:</p>
      <img src="https://loremflickr.com/320/240" alt="placeholder" />
      <img src="https://loremflickr.com/320/240" alt="placeholder" />
      <img src="https://loremflickr.com/320/240" alt="placeholder" />
      <div>
        These three images share the same source. They&apos;ve been cached by your browser and likely repeat three
        times.
      </div>
      <div>
        <code>{`<img src="https://loremflickr.com/320/240" alt="placeholder" />`}</code>
      </div>
      <p>Uncached image:</p>
      <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
      <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
      <UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />
      <div>
        These use <code>{`<UncachedImage/>`}</code>, which uses client-side cache busting. They are likely all
        different.
      </div>
      <div>
        <code>{`<UncachedImage src="https://loremflickr.com/320/240" alt="placeholder" />`}</code>
      </div>
    </div>
  ),
};
