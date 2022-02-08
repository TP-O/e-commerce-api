#!/bin/sh
keyDir="/etc/nginx/ssl/live"

if [ ! -d "$keyDir" ]; then
    apk add openssl
    mkdir -p /etc/nginx/ssl/live/
    openssl req -subj '/CN=ww.dev' -x509 -newkey rsa:4096 -nodes \
        -keyout /etc/nginx/ssl/live/privatekey.pem \
        -out /etc/nginx/ssl/live/fullchain.pem -days 365
    apk del openssl
fi
