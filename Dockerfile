FROM nginx:alpine

ADD ./dist/ /app/dist/

COPY nginx/nginx_htpasswd /tmp/.htpasswd
COPY nginx/nginx_site.conf /tmp/default
COPY nginx/nginx_site_production.conf /tmp/default_prod
COPY start.sh /start.sh

EXPOSE 80

CMD ["/start.sh"]
