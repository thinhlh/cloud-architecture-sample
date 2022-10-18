FROM node:16
COPY ["../../services/frontend/package.json", "../../services/frontend/tsconfig.json", "/data/"]
WORKDIR /data
RUN npm i
COPY ../../services/frontend/ /data/
EXPOSE 5000
ENV PORT=5000
CMD [ "npm", "run", "build" ]