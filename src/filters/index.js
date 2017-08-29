'use strict';

module.exports = function (fractal) {
    return {
        t(str) {
            return str;
        },
        field_value(str) {
            return str;
        },
        path: require('./path.js')(fractal),
    }
};
