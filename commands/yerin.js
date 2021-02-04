module.exports = {
    name: 'yerin',
    description: "Embed",
    execute(message, args, Discord)  {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('00000')    
        .setTitle('Viewing your Gfriend Yerin Card')
        .setDescription('Itzy Yeji Stats')
        .addFields(
            {name: 'stability', value: '69'}
        )
        .setImage('https://cdn.discordapp.com/attachments/806391850390126602/806867537181671455/Untitled42_20210204204110.png')
        .setFooter('Beta,Still Not Complete');

        message.delete().then(message.channel.send(newEmbed))
    }    

    }   
