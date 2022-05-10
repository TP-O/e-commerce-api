output "kube_config" {
  value = azurerm_kubernetes_cluster.e-commerce-api.kube_config_raw
}

output "host" {
  value = azurerm_kubernetes_cluster.e-commerce-api.kube_config[0].host
}

output "client_certificate" {
  value = azurerm_kubernetes_cluster.e-commerce-api.kube_config[0].client_certificate
}

output "client_key" {
  value = azurerm_kubernetes_cluster.e-commerce-api.kube_config[0].client_key
}

output "cluster_ca_certificate" {
  value = azurerm_kubernetes_cluster.e-commerce-api.kube_config[0].cluster_ca_certificate
}
