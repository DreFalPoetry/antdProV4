"use strict";
function funcDemo(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '180'; }
    var yy = '';
    yy = "找到了" + age + "岁的人";
    if (stature != undefined) {
        yy = yy + stature;
    }
    return yy;
}
var age = 18;
var result = funcDemo();
console.log(result);
function funcDemo2() {
    var demand = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        demand[_i] = arguments[_i];
    }
    var res = '找到了';
    for (var i = 0; i < demand.length; i++) {
        res = res + demand[i];
        if (i < res.length) {
            res = res + '、';
        }
    }
    res = res + '的ren';
    return res;
}
var result1 = funcDemo2('22岁', '180', '瓜子脸');
console.log(result1);
