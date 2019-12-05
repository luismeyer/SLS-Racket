#lang racket

(require "./create-racket/index.rkt")
(provide handle-post)

(define (no-post-fc data)
  "No Post Operation found")

(define (handle-post name)
  (case name
    [("create-racket") create-racket]
    [else no-post-fc]))