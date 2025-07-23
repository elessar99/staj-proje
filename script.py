import re
import sys
import subprocess

# Terraform'dan IP adresini al
result = subprocess.run(['terraform', 'output', '-raw', 'ip_address'], capture_output=True, text=True)
ip_address = result.stdout.strip()

hosts_path = "ansible/hosts"

with open(hosts_path, "r") as f:
    lines = f.readlines()

with open(hosts_path, "w") as f:
    for line in lines:
        if re.match(r"^\d+\.\d+\.\d+\.\d+", line):
            f.write(f"{ip_address} ansible_user=vboxuser ansible_ssh_pass=123 ansible_become_pass=123\n")
        else:
            f.write(line)