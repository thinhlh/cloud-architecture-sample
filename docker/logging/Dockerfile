FROM openjdk:18-oracle
COPY ./services/logging/target/*.jar /data/app.jar
WORKDIR /data
EXPOSE 8080
ENTRYPOINT ["java","-jar","/data/app.jar"]