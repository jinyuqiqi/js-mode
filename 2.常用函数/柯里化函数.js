//  函数柯里化

var currying = function(fn) {
    var args = [];

    return function() {
        console.log(this);
        console.log(arguments);

        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            return arguments.callee;
        }
    };
};

var cost = (function() {
    var money = 0;

    return function() {
        console.log(arguments);
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    };
})();

var cossst = currying(cost); //转化成currying函数

cossst(100);
cossst(200);
cossst(300);

console.log(cossst());