resource "kubernetes_ingress_class" "nginx_ingress" {
  metadata {
    name = "nginx-ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }

  spec {
    controller = "nginx.org/ingress-controller"
  }
}
