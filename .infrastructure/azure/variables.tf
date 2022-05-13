variable "tenant_id" {
  type = string
}

variable "subscription_id" {
  type = string
}

variable "client_id" {
  type = string
}

variable "client_secret" {
  type = string
}

variable "location" {
  default = "Southeast Asia"
}

variable "k8s_version" {
  default = "1.23.5"
}

variable "ssh_key" {
  type = string
}

variable "postgres_password" {
  type = string
}

variable "app_key" {
  type = string
}

variable "mail_password" {
  type = string
}

variable "facebook_client_id" {
  type = string
}

variable "facebook_client_secret" {
  type = string
}
