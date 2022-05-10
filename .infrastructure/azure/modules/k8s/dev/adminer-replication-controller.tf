resource "kubernetes_replication_controller" "adminer" {
  metadata {
    name = "adminer"

    labels = {
      app = "adminer"

      component = "database"
    }
  }

  spec {
    selector = {
      app = "adminer"

      component = "database"
    }

    template {
      metadata {
        labels = {
          app = "adminer"

          component = "database"
        }
      }

      spec {
        container {
          name  = "adminer"
          image = "dockette/adminer:pgsql"

          port {
            container_port = 80
          }

          resources {
            limits = {
              cpu = "150m"

              memory = "128Mi"
            }
          }
        }
      }
    }
  }
}
