const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



let string = '';

bot.guilds.forEach(guild=>{

string+= 'Guild name: ' + guild.name + '\n';

})

message.channel.send(string);


}

    module.exports.help = {
       name: "guilds"
    }
