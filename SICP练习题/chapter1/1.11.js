function cal(n) {
    return calInter(0, 1, 2, n)
}
function calInter(a, b, c, count) {
    if (count == 0) {
        return a
    } else {
        var sum = c + 2 * b + 3 * a
        return calInter(b, c, sum, count - 1)
    }
}

var re = cal(4);
console.log(re)