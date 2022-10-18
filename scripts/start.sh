export ENV=$1 
docker compose up --scale app-be=5 --scale app-fe=5