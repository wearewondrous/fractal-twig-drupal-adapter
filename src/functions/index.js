'use strict';

const queryString = require('query-string');

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
        }
    }

};
