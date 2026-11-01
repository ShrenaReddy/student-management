
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

        stage('Karate API Testing') {
            steps {
                bat '''
                set "JAVA_HOME=C:\\Program Files\\Eclipse Adoptium\\jdk-21.0.12.101-hotspot"
                set "PATH=%JAVA_HOME%\\bin;C:\\apache-maven\\apache-maven-3.10.0\\bin;%PATH%"
                mvn test
                '''
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
            echo 'All stages completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}
