const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message, args) => {

 //!unmute @user

 let tomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 if(!tomute) return message.reply("Couldn't find user.");
 if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't unmute the specified user!");
 let muterole = message.guild.roles.find(`name`, "muted");

  await(tomute.removeRole(muterole.id));
  message.reply(`<@${tomute.id}> has been unmuted`);


  //end of module
}

module.exports.help = {
 name: "unmute"
}
