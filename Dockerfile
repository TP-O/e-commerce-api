# PHP 8.1.1
FROM php:fpm-alpine3.15

WORKDIR /var/www/html

COPY . .

RUN echo http://dl-2.alpinelinux.org/alpine/edge/community/ >> /etc/apk/repositories
RUN apk --no-cache add shadow && usermod -u 1000 www-data && groupmod -g 1000 www-data
RUN apk del shadow

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN composer install --no-dev

RUN set -ex \
    && apk --no-cache add postgresql-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql

RUN chown -R www-data:www-data /var/www/html

USER www-data
