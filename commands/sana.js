module.exports = {
    name: 'sana',
    description: "Embed",
    execute(message, args, Discord)  {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFA7B6')    
        .setTitle('Viewing Twice Sana Card')
        .setDescription('**Stats:**')
        .addFields(
            {name: 'stability', value: '69'}
        )
        .setImage('https://0.soompi.io/wp-content/uploads/2020/09/15201533/sana.jpeg')
        .setFooter('Beta,Still Not Complete');

        message.delete().then(message.channel.send(newEmbed));
    }    

}
