#lang racket
(require "../../../utils/http/request.rkt")

(define endpoint "/rest/rackets")

(define (generate-body name price image)
  (format "{\"name\": \"~a\", \"price\": ~a, \"image\": \"~a\"}" name price image)
)

(define (create-racket data)
  (cond
    [(and (hash-has-key? data 'name) 
          (hash-has-key? data 'price) 
          (hash-has-key? data 'image)) (db-post-request endpoint 
                                          (generate-body (hash-ref data 'name) 
                                                         (hash-ref data 'price) 
                                                         (hash-ref data 'image)))]
    [else "Error: Wrong Arguments"]
  )
)

(provide create-racket)