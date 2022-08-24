resource "kubernetes_ingress_v1" "ingress" {
  metadata {
    name = "ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }

    annotations = {
      "nginx.ingress.kubernetes.io/rewrite-target" = "/"
      "nginx.org/location-snippets"                = <<EOF
            set $check 0;

            if ($http_origin ~ ^(http://localhost:3333|https://www.shopest.tk|https://e-shopee.vercel.app|https://tp-o.github.io)$) {
                set $check 1;
            }

            if ($uri ~ ^/resources) {
                set $check 1$check;
            }

            if ($check = 11) {
                add_header "Access-Control-Allow-Origin" $http_origin;
                add_header 'Access-Control-Allow-Methods' "GET, POST, OPTIONS";
            }
       EOF
    }
  }

  spec {
    ingress_class_name = "nginx-ingress"

    tls {
      hosts       = ["tp-o.tk"]
      secret_name = "ingress-tls-secret"
    }

    rule {
      host = "tp-o.tk"

      http {
        path {
          path = "/api"

          backend {
            service {
              name = "api"

              port {
                number = 80
              }
            }
          }
        }

        path {
          path = "/resources"

          backend {
            service {
              name = "api"

              port {
                number = 80
              }
            }
          }
        }

        path {
          path = "/adminer"

          backend {
            service {
              name = "adminer"

              port {
                number = 80
              }
            }
          }
        }
      }
    }
  }
}
