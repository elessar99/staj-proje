# Proje Adı

Bu proje, [projenin kısa açıklaması] için oluşturulmuştur. Terraform ve Ansible kullanılarak [hedeflenen işlem/amaç] gerçekleştirilir.

## Ön Gereksinimler

- [Terraform](https://www.terraform.io/downloads.html) yüklü olmalıdır.
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) yüklü olmalıdır.
- [Oracle VirtualBox](https://www.virtualbox.org/) yüklü olmalıdır ve PATH'e eklenmelidir.

## Kurulum

1. **Terraform ile Altyapıyı Oluşturma:**

   Öncelikle Terraform'u başlatın:

   ```bash
   terraform init
   
   $env:Path += ";C:\Program Files\Oracle\VirtualBox"
   terraform apply
   
   ansible-playbook -i hosts docker-install.yml
