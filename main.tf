terraform {
  required_providers {
    virtualbox = {
      source  = "terra-farm/virtualbox"
      version = "0.2.2-alpha.1"
    }
  }
}

provider "virtualbox" {}

resource "virtualbox_vm" "linux_vm" {
  name   = "staj-linux-0"
  image  = "./ubuntu.ova"
  cpus   = 4
  memory = "4096 mib"

  network_adapter {
      type           = "bridged"        
      host_interface = "MediaTek Wi-Fi 6E MT7922 (RZ616) 160MHz PCIe Adapter"  
    }
  
}


# output "ip_address" {
#   value = virtualbox_vm.linux_vm.ipv4_address
# }
