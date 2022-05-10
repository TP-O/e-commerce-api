#!/bin/sh
keyDir="/etc/nginx/ssl/live"

if [ ! -d "$keyDir" ]; then
    mkdir -p /etc/nginx/ssl/live/
    openssl req -subj '/CN=ec.local' -x509 -newkey rsa:4096 -nodes \
        -keyout /etc/nginx/ssl/live/privatekey.pem \
        -out /etc/nginx/ssl/live/fullchain.pem -days 365
    apk del openssl
fi

/start.sh
