(function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    var _extend = function() {
        var target = {}

        for (var i = 0; i < arguments.length; i++) {
            var source = arguments[i]

            for (var key in source) {
                if (hasOwnProperty.call(source, key)) {
                    target[key] = source[key]
                }
            }
        }
        return target
    }
    if (typeof Package !== 'undefined') {
        extend = _extend;
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = _extend;
    } else {
        root.extend = _extend;
    }
}());
