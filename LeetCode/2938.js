function minimumSteps(s) {
    var ans = 0;
    var count = 0;
    for (var x = s.length - 1; x >= 0; x--) {
        if (s[x] === '0')
            count++;
        if (s[x] === '1')
            ans += count;
    }
    return ans;
}
;
console.log(minimumSteps('0011000010'));