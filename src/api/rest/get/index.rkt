#lang racket

(require "./rackets/index.rkt")
(require "./hello-world/index.rkt")
(provide handle-get)

(define (no-get-fc)
  "No Get Operation found")

(define (handle-get name)
  (case name
    [("rackets") rackets]
    [("hello-world") hello-world]
    [else no-get-fc]))