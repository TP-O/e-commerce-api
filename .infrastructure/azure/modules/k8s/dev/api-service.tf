resource "kubernetes_service" "api" {
  metadata {
    name = "api"

    labels = {
      app = "api"

      component = "api"
    }
  }

  spec {
    port {
      port = 80
    }

    selector = {
      app = "api"

      component = "api"
    }
  }
}
