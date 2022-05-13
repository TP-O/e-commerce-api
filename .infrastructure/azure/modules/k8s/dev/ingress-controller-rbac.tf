resource "kubernetes_cluster_role" "nginx_ingress" {
  metadata {
    name = "nginx-ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }

  rule {
    verbs      = ["get", "list", "watch"]
    api_groups = [""]
    resources  = ["services", "endpoints"]
  }

  rule {
    verbs      = ["get", "list", "watch"]
    api_groups = [""]
    resources  = ["secrets"]
  }

  rule {
    verbs      = ["get", "list", "watch", "update", "create"]
    api_groups = [""]
    resources  = ["configmaps"]
  }

  rule {
    verbs      = ["list", "watch"]
    api_groups = [""]
    resources  = ["pods"]
  }

  rule {
    verbs      = ["create", "patch", "list"]
    api_groups = [""]
    resources  = ["events"]
  }

  rule {
    verbs      = ["list", "watch", "get"]
    api_groups = ["networking.k8s.io"]
    resources  = ["ingresses"]
  }

  rule {
    verbs      = ["update"]
    api_groups = ["networking.k8s.io"]
    resources  = ["ingresses/status"]
  }

  rule {
    verbs      = ["get"]
    api_groups = ["networking.k8s.io"]
    resources  = ["ingressclasses"]
  }
}

resource "kubernetes_cluster_role_binding" "nginx_ingress" {
  metadata {
    name = "nginx-ingress"

    labels = {
      app = "nginx-ingress"

      component = "ingress"
    }
  }

  subject {
    kind      = "ServiceAccount"
    name      = "nginx-ingress"
    namespace = "default"
  }

  role_ref {
    api_group = "rbac.authorization.k8s.io"
    kind      = "ClusterRole"
    name      = "nginx-ingress"
  }
}
