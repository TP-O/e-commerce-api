resource "kubernetes_secret" "postgres_secret" {
  metadata {
    name = "postgres-secret"

    labels = {
      app = "postgres"

      component = "database"
    }
  }

  data = {
    POSTGRES_PASSWORD = var.postgres_password
  }
}
