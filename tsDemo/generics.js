"use strict";
function createArray(length, value) {
    var res = [];
    for (var i = 0; i < length; i++) {
        res[i] = value;
    }
    console.log(res);
    return res;
}
createArray(3, 'x');
