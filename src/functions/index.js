'use strict';

const queryString = require('query-string');

module.exports = function (fractal) {

    return {
        path(str, obj) {
            return '#' + str + queryString.stringify(obj);
        },
        url(str, obj) {
            return 'url://' + str + queryString.stringify(obj);
        }
    }

};
