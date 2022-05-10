resource "kubernetes_service_account" "nginx_ingress" {
  metadata {
    name = "nginx-ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }
}
