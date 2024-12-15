# NestJS Quiz Manager

A NestJS-based application for managing quizzes, questions, and options. This project is designed with a focus on scalability and features a microservices-ready architecture.

---

## **Features**

- User Authentication and Authorization
- Management of Quizzes, Questions, and Options
- Database Seeding for Development and Testing
- Dockerized Environment for Easy Deployment
- Support for Microservices Architecture
- Automated Testing with Unit and E2E Tests

---

## **Getting Started**

### **Clone the Repository**
```bash
git clone <repository-url>
cd nestjs-quiz-manager
```

### **Install Dependencies**
```bash
npm install
```

### **Environment Variables**
Create a `.env` file in the root of your project and set the following variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_NAME=quiz_manager
APP_SECRET=your_jwt_secret
PORT=3000
```

---

## **Database Setup**

### **Run Migrations**
Run the following command to set up the database schema:
```bash
npm run migration:run
```

### **Seed the Database**
Seed the database with initial data:
```bash
npm run seed:run
```

---

## **Development**

### **Start the Development Server**
Run the application in development mode:
```bash
npm run start:dev
```

### **Start the Production Server**
Run the application in production mode:
```bash
npm run start:prod
```

---

## **Testing**

### **Run Unit Tests**
```bash
npm run test
```

### **Run E2E Tests**
```bash
npm run test:e2e
```

### **Generate Test Coverage Report**
```bash
npm run test:cov
```

---

## **Seeding Setup**

### **Install Required Packages**
Ensure the following packages are installed:
```bash
npm install typeorm-extension @faker-js/faker
```

### **Seeder Configuration**
Update your `DataSource` file to include the seed options:

```typescript
import { DataSource } from "typeorm";
import { SeederOptions } from "typeorm-extension";

const options: SeederOptions = {
    seeds: ["src/database/seeds/**/*.seed.ts"],
    factories: [],
};

export const AppDataSource = new DataSource({
    type: "mysql",           // or other DB type
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "my_database",
    synchronize: true,
    logging: false,
    entities: ["src/modules/**/*.entity.ts"],
    migrations: ["src/database/migrations/**/*.ts"],
    ...options,
});
```

### **Create Seeder Script**
Add the following script to `package.json`:

```json
"scripts": {
    "seed:run": "ts-node ./node_modules/typeorm-extension/cli.js seed:run"
}
```

---

## **Running the Application**

### **Development Workflow**
1. Set up the database by running migrations and seeding:
   ```bash
   npm run migration:run
   npm run seed:run
   ```
2. Start the development server:
   ```bash
   npm run start:dev
   ```

### **Production Workflow**
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm run start:prod
   ```

---