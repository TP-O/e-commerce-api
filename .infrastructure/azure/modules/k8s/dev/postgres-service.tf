resource "kubernetes_service" "postgres" {
  metadata {
    name = "postgres"

    labels = {
      app = "postgres"

      component = "database"
    }
  }

  spec {
    port {
      port = 5432
    }

    selector = {
      app = "postgres"

      component = "database"
    }

    cluster_ip = "None"
  }
}
