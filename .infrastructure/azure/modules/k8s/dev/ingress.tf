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
        if ($http_origin ~ "^(http://localhost:3333|https://www.shopest.tk|https://e-shopee.vercel.app|https://tpo-project.github.io)$") {
            add_header "Access-Control-Allow-Origin" $http_origin;
            add_header "Access-Control-Allow-Methods" "PUT, POST, GET, DELETE, OPTIONS";
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
