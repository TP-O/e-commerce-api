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
