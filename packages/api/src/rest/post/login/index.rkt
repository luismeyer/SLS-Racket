#lang racket
(require "../../../utils/http/request.rkt")
(require "../../../utils/encrypt/index.rkt")
(require json)

(provide login)
(provide make-response)
(provide check-password)
(provide fetch-users)
(provide find-user)

(define endpoint "/rest/users")

(define fetch-users
  (lambda ()
    (string->jsexpr (db-get-request endpoint))))
     
(define find-user
  (lambda (username data)
    (cond
      [(empty? data) data]
      [(equal? username (hash-ref (first data) 'username)) (first data)]
      [else (find-user username (rest data))])))

(define check-password
  (lambda (user password)
    (cond
      [(empty? user) ""]
      [(equal? (hash-ref user 'password) password) password]
      [else ""])))

(define make-response
  (lambda (username password)
    (cond
      [(non-empty-string? password) (format "{\"success\": \"~a\", \"token\": \"~a\", \"username\": \"~a\"}" "true" password username)]
      [else  "{\"success\": \"false\", \"token\": \"\", \"username\": \"\"}"])))

(define login
  (lambda (data)
    (cond
      [(and (hash-has-key? data 'username) 
            (hash-has-key? data 'password)) (make-response (hash-ref data 'username)  
                                              (check-password (find-user (hash-ref data 'username) (fetch-users)) (encrypt-password (hash-ref data 'password))))]
      [else "Error: Wrong Arguments"])))  
