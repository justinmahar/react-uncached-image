<h2 align="center">
  🌅 React Uncached Image
</h2>
<h3 align="center">
  React image component that bypasses caching using query param cache busting.
</h3>
<p align="center">
  <a href="https://badge.fury.io/js/react-uncached-image" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/react-uncached-image.svg" alt="npm Version" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-uncached-image/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-uncached-image/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-uncached-image/workflows/Deploy/badge.svg" alt="Deploy Status" /></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

## Documentation

Read the **[official documentation](https://justinmahar.github.io/react-uncached-image/)**.

👁️ **[Live Demo](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page#example)**

## Overview

An [UncachedImage](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page) adds a cache-busting query param to your image `src` to ensure the browser requests the image from the server on every render.

### Features include:

- **🐣 Fresh image every time**
  - Ensure the image is fetched from the server on every render.
- **🖼️ Renders as an `img`**
  - Use all the props an `img` supports, like `src` and `alt`.
- **🔤 Custom cache buster option**
  - Provide your own cache buster if you'd like.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

## Table of Contents 

- [Documentation](#documentation)
- [Overview](#overview)
  - [Features include:](#features-include)
- [Donate](#donate)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)

## Installation

```
npm i react-uncached-image
```

## Quick Start


```jsx
import { UncachedImage } from "react-uncached-image";
```

Use just like you would a normal `img` tag in React:

```jsx
<UncachedImage src="https://loremflickr.com/320/240" />
```

Now this image will be fetched from the server on every render.

See [UncachedImage](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page) for more information and a [live, interactive example](https://justinmahar.github.io/react-uncached-image/?path=/story/docs-uncachedimage--page#example).

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-uncached-image/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-uncached-image/stargazers): [👉⭐](https://github.com/justinmahar/react-uncached-image/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-uncached-image/?path=/story/license--page).