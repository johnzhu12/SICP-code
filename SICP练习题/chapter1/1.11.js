/**
 * 
 *  n<3 f(n) = n
 *  n>=3 f(n) = f(n-1)+ 2f(n-2)+3f(n-3)
 */
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

/*每一次迭代

c  |  b   |  a
2  |  1   |  0     first round
sum|  2(c)|  1(b)  second

所以就是
  c-->  b
  b---> a
  sum -- >c

*/