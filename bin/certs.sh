#!/bin/bash

source .env

mkdir -p $CERT_PATH

openssl req -x509 -out $CERT_PATH/fullchain.pem \
  -keyout $CERT_PATH/privkey.pem \
  -newkey rsa:2048 -days 999 -nodes -sha256 \
  -subj '/CN=localhost' -extensions EXT -config <( \
  printf "[dn]\nCN=localhost\n[req]\ndistinguished_name=dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")