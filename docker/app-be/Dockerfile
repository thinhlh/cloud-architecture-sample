FROM node:16
ADD ["../../services/backend/nest-cli.json", "../../services/backend/package.json", "../../services/backend/tsconfig.json", "/data/"]
WORKDIR /data
RUN npm i
ADD ../../services/backend/ /data  
EXPOSE 3000
CMD [ "npm", "run", "start" ]