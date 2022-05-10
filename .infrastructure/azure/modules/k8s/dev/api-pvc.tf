resource "kubernetes_persistent_volume_claim" "api_storage" {
  metadata {
    name = "api-storage"

    labels = {
      app = "api"

      component = "api"
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
