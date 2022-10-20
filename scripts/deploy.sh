cd $HOME/data/cloud-architecture-sample
git stash
git pull

./scripts/stop.sh $1
./scripts/start.sh $1
