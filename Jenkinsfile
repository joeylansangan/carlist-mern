pipeline {
    agent any
    stages {
      stage('Init') {
        steps {
          echo 'hello'
        }
      }
      stage('For PR') {
        when {
            branch 'PR-*'
        }
        steps {
          echo "This runs on PRs"
        }
      }
  }
}