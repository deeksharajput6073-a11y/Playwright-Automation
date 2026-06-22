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

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report'
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

            // Publish Allure Report in Jenkins
            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])

            // Zip Allure Report
            bat '''
            powershell -Command "if (Test-Path '.\\allure-report') { Compress-Archive -Path '.\\allure-report\\*' -DestinationPath '.\\allure-report.zip' -Force }"
            '''

            // Verify ZIP exists
            bat 'dir'

            // Send Email
            emailext(
                to: 'deeksharajput6073@gmail.com',
                subject: "Playwright Automation Report - Build #${BUILD_NUMBER} - ${currentBuild.currentResult}",
                mimeType: 'text/html',
                body: """
                <html>
                <body>
                    <h2>Playwright Automation Execution Report</h2>

                    <p><b>Job Name:</b> ${JOB_NAME}</p>
                    <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                    <p><b>Build Status:</b> ${currentBuild.currentResult}</p>

                    <p>
                        <a href="${BUILD_URL}">
                            Open Jenkins Build
                        </a>
                    </p>

                    <p>
                        <a href="${BUILD_URL}allure/">
                            Open Allure Report
                        </a>
                    </p>

                    <p>
                        <a href="${BUILD_URL}Playwright_20Report/">
                            Open Playwright Report
                        </a>
                    </p>

                    <br/>
                    <p>Allure report ZIP is attached with this email.</p>

                    <br/>
                    <p>Regards,<br/>Jenkins CI/CD</p>
                </body>
                </html>
                """,
                attachmentsPattern: 'allure-report.zip',
                attachLog: true
            )
        }
    }
}