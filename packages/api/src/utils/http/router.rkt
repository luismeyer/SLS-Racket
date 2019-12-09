#lang racket

(require json)
(require "../../rest/post/index.rkt")
(require "../../rest/get/index.rkt")

(provide routing)

(define base-path "/dev")

(define (operation-name path)
  (let ([splitted-path (string-split path "/")])
    (cond
      [(cons? splitted-path) (first splitted-path)]
      [else "not-found"])))

(define (resolver-name path)
  (let ([splitted-path (string-split path "/")])
    (cond
      [(and (cons? splitted-path) 
            (cons? (rest splitted-path))) (first (rest splitted-path))]
      [else "not-found"])))

(define (routing path data)
  (let ([real-path (string-replace path base-path "")])
  (case (operation-name real-path)
    [("post") ((handle-post (resolver-name real-path)) (string->jsexpr data))]
    [("get") ((handle-get (resolver-name real-path)))]
    [else "No Path Found"])))