module.exports = {
    apps: [
        {
            name: "events-frontend",
            script: "yarn start",
            error_file: '/logs/err.log',
            out_file: '/logs/out.log',
            log_file: '/logs/combined.log',
            time: true
        }
    ]
}