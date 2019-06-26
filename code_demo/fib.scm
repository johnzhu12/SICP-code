;迭代写法

(define (fib n)
    (fib-inter 1 0 n))

(define (fib-inter a b count)
    (if (= count 0)
        b
        (fib-inter (+ a b) a (- count 1))))

; (fib 6)

;递归写法

(define (fib2 n)
(cond ((= n 0) 0)
    ((= n 1) 1)
    (else (+ (fib2 (- n 1)) (fib2 (- n 2))))))

(fib2 4)
