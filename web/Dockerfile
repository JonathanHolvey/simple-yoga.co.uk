FROM php:7-apache

RUN a2enmod rewrite

# Create symlink for public server root
WORKDIR /opt/app
RUN mkdir ./public && \
    rm -rf /var/www/html && \
    ln -sf /opt/app/public /var/www/html

# Copy source
COPY ./ ../app/
