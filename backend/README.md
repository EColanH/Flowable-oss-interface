## Flowable Quick Starter Backend

For initializing back for the first time use the following commands:

```bash
# Build
mvn clean install
# Afterwards run the application
mvn exec:java
```

The server will be available in http://localhost:8080.

Execute [groupsUsersCreation.http](./src/main/resources/rest/groupsUsersCreation.http) to create flowable groups and users.
If using IntelliJ, select "development" environment.

The H2 Console will be available at http://localhost:8080/h2-console. Check the [application.properties](./src/main/resources/application.properties) file to setup the JDBC connection settings.