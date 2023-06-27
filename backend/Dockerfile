FROM maven:3.8-openjdk-17-slim AS build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN mvn -f /workspace/app/pom.xml install
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

FROM openjdk:17-oracle
VOLUME /tmp
EXPOSE 8080
ENTRYPOINT ["java","-cp","app:app/lib/*","com.*.*.BackendApplication"]