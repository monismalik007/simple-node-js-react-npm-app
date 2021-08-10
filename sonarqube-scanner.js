const scanner = require('sonarqube-scanner');
scanner(
    {
        serverUrl: "http://localhost:9000",
        token: "ea4142d52b5563b4814af361169669e408cc2ba5",
        options: {
            "sonar.sources": "./src"
        },
    },
    () => process.exit()
)
