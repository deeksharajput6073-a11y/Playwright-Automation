pipeline {

    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'feature/playwright-framework',
                    url: 'https://github.com/deeksharajput6073-a11y/Playwright-Automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run QA Tests') {
            steps {
                bat 'npm run test:qa'
            }
        }
    }

    post {
        always {

            // Publish Playwright Report
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])

            // Publish Allure Report
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            script {
                try {

                    mail(
                        to: 'deeksharajput6073@gmail.com',
                        subject: "Playwright Automation Report - Build #${BUILD_NUMBER} - ${currentBuild.currentResult}",
                        body: """
Job Name: ${JOB_NAME}

Build Number: ${BUILD_NUMBER}

Build Status: ${currentBuild.currentResult}

Build URL:
${BUILD_URL}

Allure Report:
${BUILD_URL}allure/

Playwright Report:
${BUILD_URL}Playwright_20Report/

Regards,
Jenkins CI/CD
"""
                    )

                    echo 'MAILER PLUGIN EMAIL SENT SUCCESSFULLY'

                } catch (Exception e) {
                    echo "MAILER PLUGIN EMAIL FAILED: ${e.getMessage()}"
                }
            }
        }
    }
}