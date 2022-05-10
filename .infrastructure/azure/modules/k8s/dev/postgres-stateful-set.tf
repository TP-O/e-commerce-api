resource "kubernetes_stateful_set" "postgres" {
  metadata {
    name = "postgres"

    labels = {
      app = "postgres"

      component = "database"
    }
  }

  spec {
    selector {
      match_labels = {
        app = "postgres"

        component = "database"
      }
    }

    template {
      metadata {
        labels = {
          app = "postgres"

          component = "database"
        }
      }

      spec {
        volume {
          name = "postgres-config"

          config_map {
            name = "postgres-config"
          }
        }

        container {
          name  = "postgres"
          image = "postgres:14.1-alpine3.15"

          port {
            container_port = 5432
          }

          env {
            name  = "PGDATA"
            value = "/var/lib/postgresql/data/postgres"
          }

          env_from {
            config_map_ref {
              name = "postgres-config"
            }
          }

          env_from {
            secret_ref {
              name = "postgres-secret"
            }
          }

          resources {
            limits = {
              cpu = "200m"

              memory = "256Mi"
            }
          }

          volume_mount {
            name       = "postgres-config"
            mount_path = "/var/config"
          }

          volume_mount {
            name       = "postgres-data"
            mount_path = "/var/lib/postgresql/data"
            sub_path   = "postgres"
          }

          liveness_probe {
            exec {
              command = ["/bin/sh", "-c", "exec pg_isready -h 127.0.0.1 -p 5432"]
            }

            initial_delay_seconds = 5
            period_seconds        = 5
          }
        }

        security_context {
          run_as_user  = 70
          run_as_group = 70
          fs_group     = 70
        }
      }
    }

    volume_claim_template {
      metadata {
        name = "postgres-data"

        labels = {
          app = "postgres"

          component = "database"
        }
      }

      spec {
        access_modes = ["ReadWriteOnce"]

        resources {
          requests = {
            storage = "500Mi"
          }
        }
      }
    }

    service_name = "postgres"
  }
}
