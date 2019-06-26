;定义一个过程，计算其中较大的两数之和
(define (maxSum a b c)
    (cond ((and (< a b) (< a c)) (+ b c))
        ((and (< b a) (< b c)) (+ a c))
        (else (+ a b))))

        (maxSum 1 2 4)
