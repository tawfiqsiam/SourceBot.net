// To make this work you must clone it and rename it to "config.js"

module.exports = {
    mongo: {
        ip: "176.65.24.238",
        user: "starzz",
        pwd: "#Zz0123456",
        port: "27017",
        db: "Cluster0",
        collections: {
            userData: "UserData",
            incidents: "IncidentReports"
        }
    },
    ratelimiter: {
        time: 1000, // time in ms
        amount: 10 // amount of requests per {time}
    },
    PORT: 1234,
    bot_token: "Njk3MTI4MjUwNjM1MTkwMzAy.Xpvj4A.ltWj7JzhKc7v_B3xYzYf4PsIHCg", // to get user's discord data.
    autodeploy: {
        branch: "production", // branch to auto deploy
        secret: "https://discordapp.com/api/webhooks/701912989288366110/lPb75pjnrdIdaqwapfwfDW26knPgZLvkbRnD4RFb7rWnhT9UK_4YPGlJ_AuWZciq4Gnf" // secret keywords for github's webhooks
    },
    underConstruction: false,
    discord: {
        guild_id: "636421475485614084" // ID of the guild
    }
};
