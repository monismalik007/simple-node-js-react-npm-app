const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "ba9f67c533c9e90a4941f535f4d531d288359f99",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
