"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };
    Utils.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=util.js.map