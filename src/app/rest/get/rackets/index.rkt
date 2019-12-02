#lang racket

(require "../../../utils/http/request.rkt")
(provide rackets)

(define endpoint "/rest/rackets")

(define (rackets)
  (get-request endpoint))