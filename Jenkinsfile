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

            // Create Allure ZIP file
            bat '''
            powershell -Command "Compress-Archive -Path '.\\allure-report\\*' -DestinationPath '.\\allure-report.zip' -Force"
            '''

            // Verify file exists
            bat 'dir'

            // Send Email
            emailext(

    to: 'deeksharajput6073@gmail.com',

    subject: "Playwright Automation Report - Build #${BUILD_NUMBER}",

    mimeType: 'text/html',

    body: """
    <h3>Automation Execution Completed</h3>

    <p><b>Job Name:</b> ${JOB_NAME}</p>

    <p><b>Build Number:</b> ${BUILD_NUMBER}</p>

    <p><b>Status:</b> ${currentBuild.currentResult}</p>

    <a href="${BUILD_URL}allure/">Open Allure Report</a>

    <br><br>

    Regards,<br>
    Jenkins
    """,

    attachmentsPattern: 'allure-report.zip',

    attachLog: true
)
        }
    }
}