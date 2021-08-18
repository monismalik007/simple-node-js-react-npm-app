const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "707e7afe449e9958104e7f8f1e5b51ccf899810b",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
