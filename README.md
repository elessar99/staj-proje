# Staj proje

## Ön Gereksinimler

- [Terraform](https://www.terraform.io/downloads.html) yüklü olmalıdır.
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) yüklü olmalıdır.
- [Oracle VirtualBox](https://www.virtualbox.org/) yüklü olmalıdır ve PATH'e eklenmelidir.

## Kurulum

   ```bash
   terraform init
   
   $env:Path += ";C:\Program Files\Oracle\VirtualBox"
   terraform apply
   
   ansible-playbook -i hosts docker-install.yml

   scp -r .\docker-app vboxuser@'ip':/home/vboxuser/

   ssh vboxuser@'ip'

   cd ~/docker-app

   docker build -t staj-flask-app .

   docker run -d -p 5000:5000 staj-flask-app
