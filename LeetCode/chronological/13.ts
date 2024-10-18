function romanToInt(s: string): number {
  let I = {symbol: 'I', value: 1}
  let V = {symbol: 'V', value: 5}
  let X = {symbol: 'X', value: 10}
  let L = {symbol: 'L', value: 50}
  let C = {symbol: 'C', value: 100}
  let D = {symbol: 'D', value: 500}
  let M = {symbol: 'M', value: 1000}

  let objArr = new Array(I, V, X, L, C, D, M);
  let symbolArr: number[] = new Array();

  for (let x = s.length-1; x >= 0; x--) {
    if (s[x-1] === I.symbol && (s[x] === V.symbol || s[x] === X.symbol)) {
      symbolArr.push(Math.abs(I.value - (s[x] === V.symbol ? V.value : X.value)));
      x--
    }

    else if (s[x-1] === X.symbol && (s[x] === L.symbol || s[x] === C.symbol)) {
      symbolArr.push(Math.abs(X.value - (s[x] === L.symbol ? L.value : C.value)));
      x--
    }

    else if (s[x-1] === C.symbol && (s[x] === D.symbol || s[x] === M.symbol)) {
      symbolArr.push(Math.abs(C.value - (s[x] === D.symbol ? D.value : M.value)));
      x--
    }
    else {
      symbolArr.push((objArr.find((element) => element.symbol === s[x])).value);
    }
  }

  return symbolArr.reduce((a,b) => a+b);

};

console.log(romanToInt('IV'))

console.log(romanToInt('LVIII'))

console.log(romanToInt('MCMXCIV'))
