docker pull grafana/k6
docker run --rm --env OPTIMIZED=$1 -i grafana/k6 run --vus 5000 --duration 30s - <./scripts/metric-script.js