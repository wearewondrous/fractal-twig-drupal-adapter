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

## Usage

This adapter allows you to use some Drupal filters, functions and tags.

### Supported Filters

`|t` - The Drupal core translation filter. Additional parameters not supported, yet.

`|field_value` - Provided by the module [drupal/twig_field_value](https://www.drupal.org/projects/twig_field_value) to use plain outputs from a field.

#### Add Custom Filters

You have the ability to extend Twig with custom filters by adding any filter functions to the twigAdapter configuration. The name of the function will be used as the filter name. For example, to create a `|render` filter:

```js
const twig = twigAdapter({
  filters: {
    render(str) {
      return str;
    }
  }
});
```

### Supported Functions

`path()` - The Drupal core path function.

`url()` - The Drupal core url function.

`block_view()` - Provided by the module [drupal/twig_extender](https://www.drupal.org/projects/twig_extender) to directly print a block.

### Supported tags

`{% trans %}` - The Drupal core translate tag.

## Creator

[WONDROUS Ltd](https://www.wearewondrous.com/)

[MIT License](LICENSE)
