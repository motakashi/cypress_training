const { defineConfig } = require('cypress')

// Populate process.env with values from .env file
require('dotenv').config()

module.exports = defineConfig({
  userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
  env: {
    YID: process.env.YID,
    PASSWORD: process.env.PASSWORD
  },
  experimentalSessionAndOrigin: true
})