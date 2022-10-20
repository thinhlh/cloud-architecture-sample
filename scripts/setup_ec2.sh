sudo snap install docker
sudo chmod 666 /var/run/docker.sock

mkdir $HOME/data
cd $HOME/data
git clone https://github.com/thinhlh/cloud-architecture-sample 
cd cloud-architecture-sample
chmod +x ./scripts/start.sh
chmod +x ./scripts/stop.sh
chmod +x ./scripts/metrics.sh

# Called from local machine # scp -r  -i root-key-pair.pem ../env ubuntu@ec2-3-0-183-152.ap-southeast-1.compute.amazonaws.com:/home/ubuntu/data/cloud-architecture-sample 
