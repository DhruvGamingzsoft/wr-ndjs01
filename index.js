const Discord = require("discord.js")
const client = new Discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "test") {
    msg.reply("bot=working");
  }
})

client.login("OTgxMDg0MDY5Njc0Nzc4Njc0.GQVPKE.oqAIcTp-hEhfknfeSom-ugDMY__kO_633lXT2M")
