# Script.ps1
param (
    [string]$vm_name
)

# 1. VirtualBox yolunu ekle ve Terraform ile VM oluştur
$env:Path += ";C:\Program Files\Oracle\VirtualBox"
terraform apply -var="vm_name=$vm_name" -auto-approve

# 2. IP adresini al
$ip_address = terraform output -raw ip_address
Write-Host "VM IP Address: $ip_address"

# 3. Python scriptini çalıştır
python script.py $ip_address

# 4. Dosyaları SCP ile kopyala
scp -r -o StrictHostKeyChecking=no ./docker-app vboxuser@${ip_address}:/home/vboxuser/

# 5. Ansible playbook'u çalıştır
cd ./ansible

wsl -e ansible-playbook -i hosts docker-install.yml --ssh-extra-args="-o StrictHostKeyChecking=no"

# 6. SSH ile bağlanıp docker komutlarını çalıştır
$sshCommand = @"
cd ~/docker-app
docker compose build
cd ~/docker-app/frontend/app
sudo chown -R nginx:nginx .
sudo chmod -R 755 .
cd ../..
docker compose up -d
"@

ssh -o StrictHostKeyChecking=no vboxuser@${ip_address} $sshCommand

Write-Host "All commands executed successfully!"