#!/usr/bin/env sh

echo "Starting ${ENVIRONMENT} environment..."

if [ "${ENVIRONMENT}" == "production" ];
then
    cp /tmp/default_prod /etc/nginx/conf.d/default.conf
else
    cp /tmp/.htpasswd /etc/nginx/.htpasswd
    cp /tmp/default /etc/nginx/conf.d/default.conf
fi

nginx -g "daemon off;"
