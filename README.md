# Flowable Quick Starter

The Flowable Quick Starter app consist in two parts:

- Backend with Spring Boot Flowable Rest API and the H2 console

    To build and run project please follow [this instructions](backend/README.md).
- Ui frontend app with [Next.js](https://nextjs.org/) and [Bulma](https://bulma.io/) 

    To build and run project please follow [this instructions](ui/README.md).

First start the backend server. This will create the Flowable database in the [data](data/) folder. Then start the UI application. You can log in with the credentials admin:test. 


- Backend with Docker

To run the backend with Docker, do docker pull 

# Docker Pull
docker pull flowable/flowable-rest

# Afterwards start a container with a in memory H2 database
docker run -p8080:8080 flowable/flowable-rest

# How to access

Base url for backend : http://localhost:8080/flowable-rest/

Swagger available on: http://localhost:8080/flowable-rest/docs/

login/password: rest-admin/test