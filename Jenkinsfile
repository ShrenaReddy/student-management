
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

        stage('Deploy Docker Container') {
            steps {
                bat '''
                docker stop student-management-container || exit /b 0
                docker rm student-management-container || exit /b 0
                docker run -d --name student-management-container -p 3001:3000 student-management:1.0
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                bat '''
                powershell -NoProfile -Command "$ready=$false; for($i=0; $i -lt 15; $i++) { try { $r=Invoke-WebRequest 'http://localhost:3001/api/students' -UseBasicParsing; if($r.StatusCode -eq 200) { $ready=$true; break } } catch { Start-Sleep -Seconds 2 } }; if(-not $ready) { Write-Error 'Application deployment failed'; exit 1 }"
                '''
                echo 'Docker deployment verified successfully!'
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check Console Output.'
        }
    }
}
