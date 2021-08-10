pipeline {
    agent any   
     environment {
            CI = 'true'
        }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
            
        }
        
        stage('Image Build') {
            agent { dockerfile true }
            steps {
                sh 'node --version'
            }
        }
        
        stage('Sonarscanner') {
            steps {
                nodejs('NodeJs'){
                    sh 'npm install --save-dev sonarqube-scanner'
                    sh 'node sonarqube-scanner.js'
                } 
            }
            
            }
                    
                        

    }
}
