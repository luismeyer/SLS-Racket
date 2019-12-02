#lang racket

(require net/http-client)
(provide post-request)
(provide get-request)

(define (post-request path body)
   (define-values (status headers in)
      (http-sendrecv "<DATABASE_URL>"
                     path
                     #:ssl? #t
                     #:version "1.1"
                     #:method "POST"
                     #:headers (list "x-apikey: <DATABASE_API_KEY>" "Content-Type: application/json")
                     #:data body))
   (close-input-port in)
   (equal? status #"HTTP/1.1 201 Created"))
   

(define (get-request path)
  (define-values (status headers in)
      (http-sendrecv "<DATABASE_URL>"
                   path
                   #:ssl? #t
                   #:version "1.1"
                   #:method "GET"
                   #:headers (list "x-apikey: <DATABASE_API_KEY>" "Content-Type: application/json")))
  (let ([result (port->string in)])
    (close-input-port in)
    (string-replace result "\n" "")))