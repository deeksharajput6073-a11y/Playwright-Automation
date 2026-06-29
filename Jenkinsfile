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

            // Default values
            def total = 0
            def passed = 0
            def failed = 0
            def skipped = 0

            // Read Playwright JSON report
            if (fileExists('playwright-report/results.json')) {

                def report = readJSON file: 'playwright-report/results.json'

                report.suites.each { suite ->
                    suite.specs.each { spec ->
                        spec.tests.each { t ->

                            total++

                            if (t.status == "passed") {
                                passed++
                            }

                            if (t.status == "failed") {
                                failed++
                            }

                            if (t.status == "skipped") {
                                skipped++
                            }
                        }
                    }
                }
            }

            try {

                mail(
                    to: 'deeksharajput6073@gmail.com',
                    subject: "Playwright Automation Report - Build #${BUILD_NUMBER} - ${currentBuild.currentResult}",
                    body: """

Playwright Automation Execution Report

==================================================

Job Name       : ${JOB_NAME}
Build Number   : ${BUILD_NUMBER}
Build Status   : ${currentBuild.currentResult}

=============== TEST SUMMARY ======================

Total Tests    : ${total}
Passed Tests   : ${passed}
Failed Tests   : ${failed}
Skipped Tests  : ${skipped}

==================================================

Build URL
${BUILD_URL}

Allure Report
${BUILD_URL}allure/

Playwright Report
${BUILD_URL}Playwright_20Report/

Regards,
Jenkins CI/CD

"""
                )

                echo "MAIL SENT SUCCESSFULLY"

            } catch (Exception e) {

                echo "MAIL FAILED: ${e.getMessage()}"

            }
        }
    }
}
}