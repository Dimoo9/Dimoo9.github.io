const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot,message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to use this command.");
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

     let botembed = new Discord.RichEmbed()
       .setColor("#c40910")
       .addField("The role", `${muterole} has been created` );
       message.channel.send(botembed);




}

module.exports.help = {
 name: "createmute"
}
