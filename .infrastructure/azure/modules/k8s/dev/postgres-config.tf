resource "kubernetes_config_map" "postgres_config" {
  metadata {
    name = "postgres-config"

    labels = {
      app = "postgres"

      component = "database"
    }
  }

  data = {
    POSTGRES_DB = "ww_db"

    POSTGRES_USER = "ww_username"
  }
}
