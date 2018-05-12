const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#c40910")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created At", bot.user.createdAt.toDateString())
    .addField("Created By", "Dimo")
    .addField("Bot found on", `${bot.guilds.size} Servers`);


  return message.channel.send(botembed);


}

module.exports.help = {
  name: "botinfo"
}
