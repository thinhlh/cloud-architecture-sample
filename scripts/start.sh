export ENV=$1 
export OPTIMIZED=false
./services/logging/mvnw clean package
# docker-compose up --scale app-be=5 --scale app-fe=5
# docker-compose up --scale cloud-be=5
docker compose up