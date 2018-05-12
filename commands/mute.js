const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message, args) => {

 //!mute @user

 let tomute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
 if(!tomute) return message.reply("Couldn't find user.");
 if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute the specified user!");
 let muterole = message.guild.roles.find(`name`, "muted");
 // start of create role
 if(!muterole){
   try{
     muterole = await message.guild.createRole({
       name: "muted",
       color: "#ff0000",
       permissions:[]
     });
     message.guild.channels.forEach(async (channel, id) => {
       await channel.overwritePermissions(muterole, {
         SEND_MESSAGES: false,
         ADD_REACTIONS: false
       });
     });
   }catch(e){
     console.log(e.stack);
   }
 }
  //end of create role
  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted`);


  //end of module
}

module.exports.help = {
 name: "mute"
}