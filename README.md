# Staj Projesi

Bu proje, VirtualBox üzerinde Ubuntu sanal makineleri oluşturmak, yapılandırmak ve üzerine Docker tabanlı uygulamalar kurmak için **Terraform**, **Ansible** ve çeşitli otomasyon araçlarını kullanır.

## 🔧 Ön Gereksinimler

Projenin sorunsuz çalışabilmesi için aşağıdaki yazılımların sisteminizde kurulu olması gerekmektedir:

- [Terraform](https://www.terraform.io/downloads.html)
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html)
- [Oracle VirtualBox](https://www.virtualbox.org/) (kurulum sonrası sistem PATH değişkenine eklenmiş olmalı)

Ayrıca aşağıdaki gereksinimler sağlanmalıdır:

- VirtualBox için kullanılacak **Ubuntu imajında** şu paketler kurulu olmalıdır:
  - `openssh-server`
  - `virtualbox-guest-utils`
- Ubuntu imajındaki kullanıcı adı **`vboxuser`** olmalıdır.
- `vboxuser` kullanıcısının **sudo parolası `123`** olarak ayarlanmalı ya da projedeki komutlar bu duruma göre güncellenmelidir.
- `main.tf` dosyasındaki aşağıdaki satırda kendi sisteminize uygun ağ arayüzü girilmelidir:

  ```hcl
  host_interface = "..."
