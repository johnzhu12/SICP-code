

// function fib(n) {
//     return fibInter(1, 0, n)
// }
// function fibInter(a, b, count) {
//     if (count == 0) {
//         return b
//     } else {
//         return fibInter(a + b, a, count - 1)
//     }
// }

// var re = fib(6)
// console.log(re)

function fib(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

var re = fib(6)
console.log(re)
