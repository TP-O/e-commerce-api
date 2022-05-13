resource "kubernetes_service" "adminer" {
  metadata {
    name = "adminer"

    labels = {
      app = "adminer"

      component = "database"
    }
  }

  spec {
    port {
      port = 80
    }

    selector = {
      app = "adminer"

      component = "database"
    }
  }
}
