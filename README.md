<h2 align="center">
  <a href="https://github.com/devboldly/react-uncached-image">React Uncached Image</a>
</h2>
<h3 align="center">
  React image component that bypasses caching using query param cache busting.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-uncached-image">
    <img src="https://badge.fury.io/js/react-uncached-image.svg" alt="npm Version"/>
  </a>
  <a href="https://github.com/devboldly/react-uncached-image/actions?query=workflow%3ATests">
    <img src="https://github.com/devboldly/react-uncached-image/workflows/Tests/badge.svg" alt="Tests Status"/>
  </a>
  <a href="https://github.com/devboldly/react-uncached-image/actions?query=workflow%3ADeploy">
    <img src="https://github.com/devboldly/react-uncached-image/workflows/Deploy/badge.svg" alt="Deploy Status"/>
  </a>
</p>

## Documentation

Read the **[official documentation](https://devboldly.github.io/react-uncached-image/)**.

👁️ **[Live Demo](https://devboldly.github.io/react-uncached-image/UncachedImage#example)**

## Overview

An [UncachedImage](https://devboldly.github.io/react-uncached-image/UncachedImage) adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.

### Features include:

- **🐣 Fresh image every time**
  - Ensure the image is fetched from the server on every render.
- **🖼️ Renders as an `img`**
  - Use all the props an `img` supports, like `src` and `alt`.
- **🔤 Custom cache buster option**
  - Provide your own cache buster if you'd like.

## Installation

```
npm i react-uncached-image
```

## Quick Start

```jsx
import { UncachedImage } from 'react-uncached-image'
```

Use just like you would a normal `img` tag in React:

```jsx
<UncachedImage src="https://loremflickr.com/320/240" />
```

Now this image will be fetched from the server on every render.

See [UncachedImage](https://devboldly.github.io/react-uncached-image/UncachedImage) for more information and a [live, interactive example](https://devboldly.github.io/react-uncached-image/UncachedImage#example).

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

## Logo Attribution

Logo graphics by [Twemoji](https://github.com/twitter/twemoji), licensed under [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/). Favicon by [favicon.io](https://favicon.io/emoji-favicons/).

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

See the [library template](https://tinyurl.com/ya3k258d) for npm script documentation.

## ⭐ Found It Helpful? [Star It!](https://github.com/devboldly/react-uncached-image/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/devboldly/react-uncached-image/stargazers): [👉⭐](https://github.com/devboldly/react-uncached-image/stargazers)

## MIT License

```
Copyright © 2020 DevBoldly https://devboldly.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```