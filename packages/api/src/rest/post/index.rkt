#lang racket
(require "./create-racket/index.rkt")
(require "./login/index.rkt")
(require "./auth/index.rkt")

(define (no-post-fc data)
  "No Post Operation found"
)

(define (handle-post name)
  (case name
    [("create-racket") create-racket]
    [("login") login]
    [("auth") auth]
    [else no-post-fc]
  )
)


(provide handle-post)