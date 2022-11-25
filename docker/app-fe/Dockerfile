FROM node:16
COPY ["./services/frontend/package.json", "./services/frontend/tsconfig.json", "/data/"]
WORKDIR /data
RUN npm i
COPY ./services/frontend/ /data/
EXPOSE 3000
CMD [ "npm", "start"]