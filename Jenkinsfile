
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting Student Management source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Check Application') {
            steps {
                bat 'node --check server.js'
                echo 'Application syntax checked successfully'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t student-management:1.0 .'
            }
        }
    }

    post {
        success {
            echo 'Student Management pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the console output.'
        }
    }
}
