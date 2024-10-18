function romanToInt(s) {
    var I = { symbol: 'I', value: 1 };
    var V = { symbol: 'V', value: 5 };
    var X = { symbol: 'X', value: 10 };
    var L = { symbol: 'L', value: 50 };
    var C = { symbol: 'C', value: 100 };
    var D = { symbol: 'D', value: 500 };
    var M = { symbol: 'M', value: 1000 };
    var objArr = new Array(I, V, X, L, C, D, M);
    var symbolArr = new Array();
    var val = 0;
    var _loop_1 = function (x) {
        if (s[x - 1] === I.symbol && (s[x] === V.symbol || s[x] === X.symbol)) {
            symbolArr.push(Math.abs(I.value - (s[x] === V.symbol ? V.value : X.value)));
            x--;
        }
        else if (s[x - 1] === X.symbol && (s[x] === L.symbol || s[x] === C.symbol)) {
            symbolArr.push(Math.abs(X.value - (s[x] === L.symbol ? L.value : C.value)));
            x--;
        }
        else if (s[x - 1] === C.symbol && (s[x] === D.symbol || s[x] === M.symbol)) {
            symbolArr.push(Math.abs(C.value - (s[x] === D.symbol ? D.value : M.value)));
            x--;
        }
        else {
            symbolArr.push((objArr.find(function (element) { return element.symbol === s[x]; })).value);
        }
        out_x_1 = x;
    };
    var out_x_1;
    for (var x = s.length - 1; x >= 0; x--) {
        _loop_1(x);
        x = out_x_1;
    }
    return symbolArr.reduce(function (a, b) { return a + b; });
}
;
console.log(romanToInt('IV'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
