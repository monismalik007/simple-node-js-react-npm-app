const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
