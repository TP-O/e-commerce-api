resource "kubernetes_secret" "api_secret" {
  metadata {
    name = "api-secret"

    labels = {
      app = "api"

      component = "api"
    }
  }

  data = {
    APP_KEY = var.app_key

    DB_PASSWORD = var.postgres_password

    FACEBOOK_CLIENT_ID = var.facebook_client_id

    FACEBOOK_CLIENT_SECRET = var.facebook_client_secret

    MAIL_PASSWORD = var.mail_password
  }
}
