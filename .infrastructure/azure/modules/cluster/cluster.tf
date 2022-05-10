resource "azurerm_resource_group" "e-commerce-api" {
    name = "e-commerce-api"
    location = var.location
}

resource "azurerm_kubernetes_cluster" "e-commerce-api" {
    name = "e-commerce-api"
    location = azurerm_resource_group.e-commerce-api.location
    resource_group_name = azurerm_resource_group.e-commerce-api.name
    kubernetes_version = var.k8s_version
    dns_prefix = "e-commerce-api"

    default_node_pool {
        name = "default"
        node_count = 1
        vm_size = "Standard_A2_v2"
        os_disk_size_gb = 35
        type = "VirtualMachineScaleSets"
    }

    service_principal {
        client_id = var.client_id
        client_secret = var.client_secret
    }

    linux_profile {
        admin_username = "TP-O"
        ssh_key {
            key_data = var.ssh_key
        }
    }

    network_profile {
        network_plugin = "kubenet"
        load_balancer_sku = "standard"
    }
}
