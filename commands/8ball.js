const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//!8ball <question>
  if(!args[1]) return message.reply("Please enter a question");
  let replies = ["Yes.", "No.", "I don't know.", "Ask again later"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed);

}
    module.exports.help = {
       name: "8ball"
    }
