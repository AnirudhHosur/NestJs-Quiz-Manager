# NestJs Quiz Manager

This repository contains the codebase for a **Quiz Manager Application** built using **NestJS**. The application is designed to manage quizzes, questions, and options with proper relationships, CRUD operations, and user authentication.

## Features

- **Entity Relationships**:
  - A **Quiz** can have multiple **Questions**
  - A **Question** can have multiple **Options**
  - **Users** can create and manage quizzes

- **Authentication & Authorization**:
  - User registration and login functionality
  - JWT (JSON Web Token) based authentication
  - Password hashing using bcrypt
  - Protected routes using Passport JWT strategy

- **CRUD Operations**:
  - Create, Read, Update, and Delete operations for all entities (Quiz, Question, Option)
  - User management operations

- **Validation**:
  - DTOs (Data Transfer Objects) for input validation
  - Custom password validation rules
  - Integrated validation using `class-validator` and `class-transformer`

- **Database Integration**:
  - PostgreSQL database integration with TypeORM
  - Database migrations support
  - Database visualization using **PgAdmin 4**

- **Configuration Management**:
  - Environment-based configuration using `@nestjs/config`
  - Secure storage of sensitive information in `.env` files

- **API Testing**:
  - APIs tested using **Postman**

- **Modular Architecture**:
  - Clear separation of concerns between controllers, services, repositories, and entities
  - Modular structure with dedicated modules for Quiz, User, and Auth

## Technologies Used

- **Node.js**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **JWT & Passport**
- **Bcrypt**
- **PgAdmin 4**
- **Postman**

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes using Guards
- Environment variable management
- Input validation and sanitization

## Testing

- **Unit Tests**: Using Jest for testing core components
- **Integration Tests**: Testing module interactions
- **Authentication Tests**: Verifying security mechanisms

## Environment Setup

Create a `.env` file with the following variables: