const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.channel.send("https://discordapp.com/oauth2/authorize?client_id=444501543128137730&scope=bot&permissions=2146958591");
}

module.exports.help = {
  name: "inviteme"
}
