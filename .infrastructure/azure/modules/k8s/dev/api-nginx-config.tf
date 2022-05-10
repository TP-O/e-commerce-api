resource "kubernetes_config_map" "nginx_config" {
  metadata {
    name = "nginx-config"

    labels = {
      app = "api"

      component = "api"
    }
  }

  data = {
    "default.conf" = "server {\n  listen   80;\n  listen   [::]:80 default ipv6only=on; \n\n server_name _;\n\n  index index.php;\n\n  server_tokens off;\n\n  root /var/www/html/public;\n\n  gzip on;\n  gzip_min_length 10240;\n  gzip_proxied expired no-cache no-store private auth;\n  gzip_types text/plain text/css text/xml application/json text/javascript application/x-javascript application/xml;\n  gzip_disable \"MSIE [1-6]\\.\";\n\n  location / {\n      try_files $uri $uri/ /index.php?$query_string;\n  }\n\n  location ~ \\.php$ {\n      try_files $uri $uri/ /index.php?$query_string;\n      fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n      fastcgi_pass unix:/run/php/php8.1-fpm.sock;\n      fastcgi_index index.php;\n      include fastcgi_params;\n      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n      fastcgi_param PATH_INFO $fastcgi_path_info;\n  }\n\n  location ~* \\.(jpg|jpeg|gif|png|css|js|ico|xml)$ {\n      expires           5d;\n  }\n\n  location ~ /\\. {\n      log_not_found off;\n      deny all;\n  }\n}\n"
  }
}
