resource "kubernetes_deployment" "nginx_ingress_controller" {
  metadata {
    name = "nginx-ingress-controller"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }

  spec {
    selector {
      match_labels = {
        app = "nginx-ingress"

        component = "ingress"
      }
    }

    template {
      metadata {
        labels = {
          app = "nginx-ingress"

          component = "ingress"
        }
      }

      spec {
        container {
          name  = "nginx-ingress-controller"
          image = "nginx/nginx-ingress:2.0.3-alpine"
          args  = ["-enable-custom-resources=false", "-enable-snippets=true", "-ingress-class=nginx-ingress", "-nginx-configmaps=$(POD_NAMESPACE)/nginx-ingress-config", "-default-server-tls-secret=$(POD_NAMESPACE)/ingress-tls-secret"]

          port {
            name           = "http"
            container_port = 80
          }

          port {
            name           = "https"
            container_port = 443
          }

          env {
            name = "POD_NAMESPACE"

            value_from {
              field_ref {
                field_path = "metadata.namespace"
              }
            }
          }

          env {
            name = "POD_NAME"

            value_from {
              field_ref {
                field_path = "metadata.name"
              }
            }
          }

          resources {
            limits = {
              cpu = "125m"

              memory = "128Mi"
            }
          }
        }

        service_account_name = "nginx-ingress"
      }
    }
  }
}
