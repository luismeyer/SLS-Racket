#lang racket
(require "../login/index.rkt")

(provide auth)

(define auth
  (lambda (data)
    (cond
      [(and (hash-has-key? data 'username) 
            (hash-has-key? data 'password)) (make-response (hash-ref data 'username)  
                                              (check-password (find-user (hash-ref data 'username) (fetch-users)) (hash-ref data 'password)))]
      [else "Error: Wrong Arguments"])))