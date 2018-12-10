'use strict';

const queryString = require('query-string');
const drupalAttribute = require('drupal-attribute');

module.exports = function (fractal) {

    return {
        path(str, obj) {
            return '#' + str + queryString.stringify(obj);
        },
        url(str, obj) {
            return 'url://' + str + queryString.stringify(obj);
        },
        block_view(path) {
            return this.context[path] || 'block_view returned undefined from key ' + path;
        },
        active_theme_path() {
            return '';
        },
        create_attribute(attributes) {
            return new drupalAttribute(attributes);
        }
    }

};
