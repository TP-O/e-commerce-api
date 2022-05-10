resource "kubernetes_service" "nginx_ingress" {
  metadata {
    name = "nginx-ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }

  spec {
    port {
      name = "http"
      port = 80
    }

    port {
      name = "https"
      port = 443
    }

    selector = {
      app = "nginx-ingress"

      component = "ingress"
    }

    type = "LoadBalancer"
  }
}
