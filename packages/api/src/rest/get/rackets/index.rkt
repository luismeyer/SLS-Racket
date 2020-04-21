#lang racket

(require "../../../utils/http/request.rkt")

(define endpoint "/rest/rackets")

(define (rackets)
  (db-get-request endpoint))

(provide rackets)