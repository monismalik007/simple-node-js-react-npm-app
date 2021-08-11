const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "7abf70b6a7486751fe87c5d31573a93fe3e5cce6",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
