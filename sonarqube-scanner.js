const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "46a57961104ec570e23ca1f8a696ed9ca6d5fe62",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
