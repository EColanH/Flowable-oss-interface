FROM maven:3.8.3-openjdk-17 AS build

COPY . /app
WORKDIR /app

RUN mvn clean package
FROM openjdk:17

COPY --from=build /app/target/quickstarter-0.0.1-SNAPSHOT.jar /app/quickstarter.jar
WORKDIR /app
CMD ["java", "-jar", "quickstarter.jar"]

