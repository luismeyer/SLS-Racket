#lang racket

(require json)
(require "./utils/http/router.rkt")

(define (execute-logic data)
  (let ([json (string->jsexpr data)])
    (printf (format "~a~%" (routing (hash-ref json 'path) (hash-ref json 'body))))
    (flush-output)))

(define (loop-input)
  (execute-logic (read-line))
  (loop-input))

(loop-input)