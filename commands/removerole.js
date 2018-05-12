const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You're not authorized to use this command")
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Could not find the specified user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("You did not specify a role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Couldn't find the specified role.")

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
  await(rMember.removeRole(gRole.id));

  try{
     await rMember.send(`The role ${gRole.name} has been stripped away from you`)
  }catch(e){
  message.channel.send(`<@${rMember.id} his role has been stripped away ${gRole.name}.`)
  }


}

module.exports.help = {
    name: "removerole"
}
