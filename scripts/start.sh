export ENV=$1 
export OPTIMIZED=false
# docker-compose up --scale app-be=5 --scale app-fe=5
docker-compose up --scale app-be=5