const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      // !ban @Dimo Bullying

      let bUser = message.mentions.members.first()
      if(!bUser) return message.channel.send("Can't find user!");
      let bReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You're not Authorized to use this command");
      if(bUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person cannot be banned");
      if(!bReason) return message.reply("Enter a reason");

      let banEmbed = new Discord.RichEmbed()
      .setDescription("~Ban~")
      .setColor("#bc0000")
      .addField("Banned User", `${bUser} with ID ${bUser.id}`)
      .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Banned In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", bReason);

      let banChannel = message.guild.channels.find(`name`, "logs");
      if(!banChannel) return message.channel.send("Can't find logs channel.");

      message.guild.member(bUser).ban(bReason);
      banChannel.send(banEmbed);

    }

    module.exports.help = {
       name: "ban"
    }
