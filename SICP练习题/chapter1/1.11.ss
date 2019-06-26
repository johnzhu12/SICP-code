
;递归写法
(define (cal n)
    (if (< n 3)
        n
        (+ (cal (- n 1)) (* (cal (- n 2)) 2) (* (cal (- n 3)) 3))))


(cal 4)
;迭代写法




