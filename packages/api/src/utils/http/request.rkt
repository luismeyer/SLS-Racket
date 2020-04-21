#lang racket
(require net/http-client)

(define (db-post-request path body)
   (define-values (status headers in)
      (http-sendrecv (getenv "DATABASE_HOST")
                     path
                     #:ssl? #t
                     #:version "1.1"
                     #:method "POST"
                     #:headers (list (string-append "x-apikey: " (getenv "DATABASE_API_KEY")) "Content-Type: application/json")
                     #:data body))
   (close-input-port in)
   (equal? status #"HTTP/1.1 201 Created"))
   

(define (db-get-request path)
  (define-values (status headers in)
      (http-sendrecv  (getenv "DATABASE_HOST")
                   path
                   #:ssl? #t
                   #:version "1.1"
                   #:method "GET"
                   #:headers (list (string-append "x-apikey: " (getenv "DATABASE_API_KEY")) "Content-Type: application/json")))
  (let ([result (port->string in)])
    (close-input-port in)
    (string-replace result "\n" "")))

(provide db-post-request)
(provide db-get-request)