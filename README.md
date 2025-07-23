# Staj proje

## Ön Gereksinimler

- [Terraform](https://www.terraform.io/downloads.html) yüklü olmalıdır.
- [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html) yüklü olmalıdır.
- [Oracle VirtualBox](https://www.virtualbox.org/) yüklü olmalıdır ve PATH'e eklenmelidir.

## Kurulum

   ```bash
   terraform init
   
   $env:Path += ";C:\Program Files\Oracle\VirtualBox"
   terraform apply -var="vm_name="

   terraform output -raw ip_address | ForEach-Object { python script.py $_ }

   cd cd ansible/
   
   ansible-playbook -i hosts docker-install.yml
   ansible-playbook -i hosts docker-install.yml --ssh-extra-args="-o StrictHostKeyChecking=no"

   scp -r .\docker-app vboxuser@'ip':/home/vboxuser/
   scp -r ./docker-app vboxuser@192.168.1.43:/home/vboxuser/

   ssh vboxuser@'ip'

   cd ~/docker-app

   docker build -t staj-app .
   docker run -d -p 5000:5000 -p 3000:3000 staj-app

   docker build -t staj-flask-app .

   docker run -d -p 5000:5000 staj-flask-app
