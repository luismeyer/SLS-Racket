#lang racket
(require crypto)
(require crypto/libcrypto)
(require net/uri-codec)

(crypto-factories (list libcrypto-factory))

(define encrypt-password
  (lambda (pass)
    (uri-encode (~a (digest 'sha1 pass)))))

(provide encrypt-password)