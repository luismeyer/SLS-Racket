FROM ubuntu
WORKDIR /

RUN apt-get update

# Install Racket and raco
RUN apt-get install -y racket
