# Student Management Application using DevOps Tools

## 1. Project Overview

The **Student Management Application** is a web-based application developed to manage student information. It allows users to view, add, search, and delete student records through a simple and user-friendly interface.

This project demonstrates the use of DevOps tools to automate application testing, Docker image creation, and deployment using a Jenkins CI/CD pipeline.

## 2. Objectives

- To develop a simple Student Management web application.
- To perform CRUD-related operations on student records.
- To containerize the application using Docker.
- To automate the build and testing process using Jenkins.
- To perform API testing using Karate.
- To automate Docker deployment through a Jenkins pipeline.

## 3. Technologies Used

| Technology | Purpose |
|---|---|
| HTML, CSS, JavaScript | Frontend development |
| Node.js | Backend runtime |
| Express.js | Web application framework |
| Docker | Application containerization |
| Jenkins | CI/CD automation |
| Maven | Test execution and dependency management |
| Karate | API testing |
| Git and GitHub | Version control and source code management |

## 4. Application Features

- View all student records.
- Add new student details.
- Search for a student using their ID.
- Delete student records.
- Validate student information before adding records.
- Display student details through a web interface.

## 5. Project Structure

```text
student-management/
│
├── public/
│   └── index.html
│
├── src/
│   └── test/
│       └── java/
│           ├── student.feature
│           └── StudentTest.java
│
├── server.js
├── package.json
├── package-lock.json
├── pom.xml
├── Dockerfile
├── .dockerignore
├── .gitignore
└── Jenkinsfile
```

## 6. Steps to Run the Application Locally

### Prerequisites

- Node.js and npm
- Docker Desktop

### Step 1: Clone the Repository

```bash
git clone https://github.com/ShrenaReddy/student-management.git
```

### Step 2: Navigate to the Project Folder

```bash
cd student-management
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Application

```bash
npm start
```

Open the following URL in your browser:

```text
http://localhost:3000
```

## 7. Docker Implementation

The application is containerized using Docker.

Build the Docker image:

```bash
docker build -t student-management:1.0 .
```

Run the Docker container:

```bash
docker run -d --name student-management-container -p 3001:3000 student-management:1.0
```

Access the application:

```text
http://localhost:3001
```

To view running containers:

```bash
docker ps
```

To stop the container:

```bash
docker stop student-management-container
```

## 8. API Testing Using Karate

Karate is used to test the Student Management REST API.

The following scenarios are tested:

1. Get all students – verifies that student records are retrieved successfully.
2. Add a new student – verifies that a student record can be added successfully.
3. Reject invalid student details – verifies that invalid input is rejected with HTTP status 400.

Run the tests using Maven:

```bash
mvn test
```

**Note:** The Karate feature file uses `http://localhost:3001` as its base URL. Start the Docker container on port 3001 before running the tests.

## 9. Jenkins CI/CD Pipeline

Jenkins automates the application build, testing, and deployment process.

The pipeline contains the following stages:

1. **Checkout:** Retrieves the source code from GitHub.
2. **Install Dependencies:** Installs the required Node.js packages.
3. **Check Application:** Checks the JavaScript syntax.
4. **Karate API Testing:** Executes API test scenarios using Maven.
5. **Build Docker Image:** Creates the Docker image.
6. **Deploy Docker Container:** Replaces the previous container and deploys the latest application.
7. **Verify Deployment:** Checks whether the deployed application is responding successfully.

## 10. Conclusion

The Student Management Application demonstrates how DevOps tools can be integrated into a software development workflow. Docker provides application containerization, Jenkins automates the CI/CD pipeline, and Karate performs API testing.

The project successfully demonstrates automated testing, Docker image building, deployment, and deployment verification.

## 11. Repository

GitHub: https://github.com/ShrenaReddy/student-management
