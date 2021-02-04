module.exports = {
    name: 'yeji',
    description: "Embed",
    execute(message, args, Discord)  {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('00000')    
        .setTitle('Viewing Itzy Yeji Card')
        .setDescription('Itzy Yeji Stats')
        .addFields(
            {name: 'stability', value: '69'}
        )
        .setImage('https://kprofiles.com/wp-content/uploads/2019/01/1-Yeji-526x800.jpg')
        .setFooter('Beta,Still Not Complete');

        message.delete().then(message.channel.send(newEmbed));
    }    
    

     
    
    }
