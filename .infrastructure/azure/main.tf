terraform {
  cloud {
    organization = "e-commerce-api"

    workspaces {
      name = "e-commerce-api"
    }
  }

  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.5.0"
    }
  }
}

provider "azurerm" {
  tenant_id       = var.tenant_id
  subscription_id = var.subscription_id
  client_id       = var.client_id
  client_secret   = var.client_secret

  features {
    //
  }
}

module "cluster" {
  source = "./modules/cluster/"

  client_id     = var.client_id
  client_secret = var.client_secret
  location      = var.location
  k8s_version   = var.k8s_version
  ssh_key       = var.ssh_key
}

module "dev-k8s" {
  source = "./modules/k8s/dev/"

  host                   = module.cluster.host
  client_certificate     = base64decode(module.cluster.client_certificate)
  client_key             = base64decode(module.cluster.client_key)
  cluster_ca_certificate = base64decode(module.cluster.cluster_ca_certificate)
  postgres_password      = var.postgres_password
  app_key                = var.app_key
  mail_password          = var.mail_password
  facebook_client_id     = var.facebook_client_id
  facebook_client_secret = var.facebook_client_secret
}
