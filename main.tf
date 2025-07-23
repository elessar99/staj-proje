terraform {
  required_providers {
    virtualbox = {
      source  = "terra-farm/virtualbox"
      version = "0.2.2-alpha.1"
    }
  }
}
variable "vm_name" {
  description = "VM adı"
  type        = string
  default     = "Staj-Proje-default"
}
provider "virtualbox" {}

  resource "virtualbox_vm" "linux_vm" {
    name   = var.vm_name
    image  = "./ubuntu-1.ova"
    cpus   = 4
    memory = "8192 mib"

  network_adapter {
      type           = "bridged"        
      host_interface = "MediaTek Wi-Fi 6E MT7922 (RZ616) 160MHz PCIe Adapter"  
    }
  
}


output "ip_address" {
  value = virtualbox_vm.linux_vm.network_adapter[0].ipv4_address
}
