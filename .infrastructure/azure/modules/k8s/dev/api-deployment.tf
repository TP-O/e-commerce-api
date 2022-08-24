resource "kubernetes_deployment" "api" {
  metadata {
    name = "api"

    labels = {
      app = "api"

      component = "api"
    }
  }

  spec {
    replicas = 3

    selector {
      match_labels = {
        app = "api"

        component = "api"
      }
    }

    template {
      metadata {
        labels = {
          app = "api"

          component = "api"
        }
      }

      spec {
        volume {
          name = "nginx-config"

          config_map {
            name         = "nginx-config"
            default_mode = "0600"
          }
        }

        volume {
          name = "storage"

          persistent_volume_claim {
            claim_name = "api-storage"
          }
        }

        init_container {
          name    = "prepare-storage"
          image   = "ghcr.io/tp-o/e-commerce-api:2.x.x-latest"
          command = ["/bin/sh", "-c", "if [ -z \"$(ls -A /storage/logs)\" ]; then cp -R /var/www/html/storage/* /storage; chown -R nginx:nginx /storage; fi"]

          volume_mount {
            name       = "storage"
            mount_path = "/storage"
          }
        }

        container {
          name  = "api"
          image = "ghcr.io/tp-o/e-commerce-api:2.x.x-latest"

          port {
            container_port = 80
          }

          env_from {
            config_map_ref {
              name = "api-config"
            }
          }

          env_from {
            secret_ref {
              name = "api-secret"
            }
          }

          resources {
            limits = {
              cpu = "150m"

              memory = "128Mi"
            }
          }

          volume_mount {
            name       = "nginx-config"
            mount_path = "/etc/nginx/conf.d/default.conf"
            sub_path   = "default.conf"
          }

          volume_mount {
            name       = "storage"
            mount_path = "/var/www/html/storage"
          }
        }

        security_context {
          fs_group = 1000
        }
      }
    }
  }

  lifecycle {
    ignore_changes = [
      spec[0].template[0].spec[0].container[0].image,
      spec[0].template[0].spec[0].init_container[0].image,
    ]
  }
}
