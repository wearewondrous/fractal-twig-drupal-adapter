# Twig Adapter

An adapter to let you use [Twig](https://github.com/twigjs/twig.js) templates with [Fractal](http://github.com/frctl/fractal).

## Installation

```bash
$ npm install --save @wondrousllc/fractal-twig-drupal-adapter
```

in your `fractal.js`

```js
const fractal = require('@frctl/fractal').create();
const twigAdapter = require('@wondrousllc/fractal-twig-drupal-adapter');
const twig = twigAdapter({
  handlePrefix: '@components/',
});
```

## Creator

[WONDROUS LLC](https://www.wearewondrous.com/)

## [License](LICENSE)
