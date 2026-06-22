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
                emailext(
                    to: 'deeksharajput6073@gmail.com',
                    from: 'deeksharajput6073@gmail.com',
                    replyTo: 'deeksharajput6073@gmail.com',
                    subject: "Playwright Automation Report - Build #${BUILD_NUMBER}",
                    mimeType: 'text/html',
                    body: """
                    <html>
                    <body>
                        <h2>Playwright Automation Execution Report</h2>

                        <p><b>Job Name:</b> ${JOB_NAME}</p>
                        <p><b>Build Number:</b> ${BUILD_NUMBER}</p>
                        <p><b>Status:</b> ${currentBuild.currentResult}</p>

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

                    </body>
                    </html>
                    """
                )

                echo "EMAIL SENT SUCCESSFULLY"

            } catch (Exception e) {
                echo "EMAIL FAILED: ${e}"
            }
        }
    }
}