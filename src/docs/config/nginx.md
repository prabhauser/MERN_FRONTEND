# Nginx

- Steps to install Nginx in ubuntu 20.04 

## Links

- [Install](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/#installing-prebuilt-ubuntu-packages)


## Install

Installing a Prebuilt Ubuntu Package from an Ubuntu Repository

```sh
sudo apt-get update
sudo apt-get install nginx
sudo nginx -v
```

## Allow http & https port

```sh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```
Note : same ports must be also allowed in EC2 network security group

## config

- Create file with domain/ip address name (eg: 10.*.*.*.conf) in '/etc/nginx/conf.d' folder

```yaml
# /etc/nginx/conf.d/10.000.00.00.conf

server {
      
      # --- listening to port 80
      listen 80 backlog=4096;

      # --- specify private & public ip, domain name
      server_name 10.000.00.00 www.dev.adb.com;

      # --- specify root folder (all static applications can reside in it)
      root /data/adb/build/client;

      location / {
        # --- let landing index.html call -> default-pages/index.html
        index index.html readme.html master.html;
      }
      
      # --- Say to deny some file type requests
      location ~ \.(md|sh) {

        deny all;
      }      

      # --- Node server reverse proxy
      location /adb-dev-server/ {

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

        # --- url of server application with port
        proxy_pass http://localhost:300X/;
      } 

      location /adb-qa-server/ {

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;

        # --- url of server application with port
        proxy_pass http://localhost:300X/;
      } 

    }
```


## Verify config

```sh
nginx -t
```

## Enable Nginx as start up service

```sh
sudo systemctl enable nginx
```

## Optimizing the Backlog Queue

- Tuning the Operating System

```sh
sudo sysctl -w net.core.somaxconn=4096
```

- Add the following line to /etc/sysctl.conf

```
net.core.somaxconn = 4096
```

## Other commands

```sh
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
```
