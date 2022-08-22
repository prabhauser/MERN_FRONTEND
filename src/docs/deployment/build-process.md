# Build Process

Steps to deploy web build in application server
Application server IP: 18.142.59.41 (public)/ 10.10.0.215

## Step 1

### Turn on the server by opening the following URL: (email and password credentials will be shared for the resource)

```
https://*****.signin.aws.amazon.com/console

```

## Step 2

### Click on "EC2" in the services.

### Goto Instances -> Click on Instance id of "NodeJs-Mobility"

### Click on Instance state -> Start Instance

### Go back to Instances Dashboard and check the instance state/ status (running & check passed)

## Step 3

### Connect to the terminal (via EC2 instance)

#### Goto EC2 -> Instances-> Click on Instance id of "NodeJs-Mobility"

#### Click on Connect

#### Click on Session Manager tab and Click connect

### Switch to the root

```
sudo -i
```

### Apply the build

```
cd /data/adb/code/client/dev
./build.sh
```

### type 'dev' for dev build

### If build is for qa server goto the qa folder and then type run the build.sh file

```
cd /data/adb/code/client/qa
./build.sh
```

## Step 4

### Check if the application URL is working on the server by opening the following links for dev/qa/uat respectively

```
http://18.142.59.41/dev
http://18.142.59.41/qa
http://18.142.59.41/uat
```

## In case of conflicts like stash or commit

git reset --hard HEAD
git clean -fxd
git pull
chmod 711 build.sh
./build.sh
