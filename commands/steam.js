const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.channel.send("Dimo's steam is https://steamcommunity.com/id/Dimoo_/");
}

module.exports.help = {
   name: "steam"
}
