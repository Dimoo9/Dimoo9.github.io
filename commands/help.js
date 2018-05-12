const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
 let helpembed = new Discord.RichEmbed()
    .setDescription("Help Menu")
    .addField("Member Commands", "help\n8ball\nbotinfo\ndog\nserverinfo\nreport\ninviteme", true)
    .addField("Moderation Commands", "ban\nkick\nclear\nmute\nunmute\ntempmute\nwarn\naddrole\nremoverole\nsay", true)
message.channel.send(helpembed);

}

module.exports.help = {
    name: "help"
}
