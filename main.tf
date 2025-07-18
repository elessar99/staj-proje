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
  name   = "staj-linux"
  image  = "./ubuntu.ova"
  cpus   = 2
  memory = "2048 mib"

  network_adapter {
    type           = "bridged"
  }

  # ssh bilgileri bu providerda desteklenmiyor, bu yüzden kaldırıyoruz.
}

# output "ip_address" {
#   value = virtualbox_vm.linux_vm.ipv4_address
# }
