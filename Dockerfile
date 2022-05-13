# Nginx 1.21.6 - PHP 8.1.13 - Composer 2.2.7 - bullseye
FROM wyveo/nginx-php-fpm:php81

WORKDIR /var/www/html

COPY . .

RUN usermod -u 1000 nginx && groupmod -g 1000 nginx

RUN chown -R nginx:nginx /var/www/html

USER nginx:nginx

RUN composer install --no-dev

USER root

COPY ./.docker/api/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./.docker/api/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
