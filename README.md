# NestJs Quiz Manager

This repository contains the codebase for a **Quiz Manager Application** built using **NestJS**. The application is designed to manage quizzes, questions, and options with proper relationships and CRUD operations. It uses **PostgreSQL** as the database and follows a modular architecture with separation of concerns.

## Features

- **Entity Relationships**:
  - A **Quiz** can have multiple **Questions**.
  - A **Question** can have multiple **Options**.
- **CRUD Operations**:
  - Create, Read, Update, and Delete operations for all entities (Quiz, Question, Option).
- **Validation**:
  - DTOs (Data Transfer Objects) are used for input validation.
  - Integrated validation using `class-validator` and `class-transformer`.
- **Database Integration**:
  - PostgreSQL database integration with TypeORM.
  - Database visualization using **PgAdmin 4**.
- **API Testing**:
  - APIs tested using **Postman**.
- **Modular Architecture**:
  - Clear separation of concerns between controllers, services, repositories, and entities.

## Technologies Used

- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **PgAdmin 4**
- **Postman**

## Testing

- **Unit Tests**: The application includes unit tests written using **Jest** to ensure the functionality of the core components such as controllers, services, and repositories.
  - Tests are organized in separate `*.spec.ts` files.
  - **Example**: A test for the `OptionController` is written to check the `getAllOptions()` method, which verifies that it returns an array of options correctly.
  
- **Integration Tests**: Integration tests are used to test how different modules work together, including database interactions.
  - **Jest** with **NestJS testing utilities** (like `Test.createTestingModule`) is used for creating isolated test modules and mocking services.
  
- To run the tests:
  ```bash
  npm run test
