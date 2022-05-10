resource "kubernetes_config_map" "nginx_ingress_config" {
  metadata {
    name = "nginx-ingress-config"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }
}
