const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});
const prefix = "$"
const fs = require("fs");





Client.on("ready", () => {
    console.log("Bot prêt !");
});




Client.on("messageCreate", message => {
    if(message.author.bot) return;

    //y!help
    if (message.content === prefix + "teste"){

        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Titre')
        .setURL('https://discord.js.org/')
        .setAuthor('Nom du créateur du message', 'https://media.discordapp.net/attachments/861212719373221911/891449327686406194/00000000000000000000000000000000000000000000000000000000000000000000.jpg?width=559&height=559', 'https://discord.js.org')
        .setDescription('Description du message')
        .setThumbnail('https://media.discordapp.net/attachments/861212719373221911/891449327686406194/00000000000000000000000000000000000000000000000000000000000000000000.jpg?width=559&height=559')
        .addFields(
            { name: 'Titre secondaire', value: 'description' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Titre secondaire', value: 'description', inline: true },
            { name: 'Titre secondaire', value: 'description', inline: true },
        )
        .setImage('https://media.discordapp.net/attachments/861212719373221911/891449327686406194/00000000000000000000000000000000000000000000000000000000000000000000.jpg?width=559&height=559')
        .setTimestamp()
        .setFooter('Auteur du message', 'https://media.discordapp.net/attachments/861212719373221911/891449327686406194/00000000000000000000000000000000000000000000000000000000000000000000.jpg?width=559&height=559');
        message.channel.send({ embeds: [embed]});
    }




    else if (message.content === prefix + "clear"){

    }
});

Client.on("guildMemberAdd", member => {
    
});

Client.on("guildMemberRemove", member => {
    console.log("enlejbk")
});


Client.login("ODgxOTk0NzM1MzU3NjU3MDk5.YS07mw._z7gitf9qe0GAA4-g9cGx5ejtS0");