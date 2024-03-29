const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '~';

const fs  = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); 
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot is Online!');
});

client.on('message', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot) return;

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args .shift().toLowerCase();

   if(command === 'ping'){
       client.commands.get('ping').execute(message, args, Discord);

    } else if (command == 'yeji'){
        client.commands.get('yeji').execute(message, args, Discord);
    
    } else if (command == 'clear'){
        client.commands.get('clear').execute(message, args, Discord);
    } else if (command == 'twice'){
        client.commands.get('twice').execute(message, args, Discord)
    } else if (command == 'sana'){
        client.commands.get('sana').execute(message, args, Discord)
    } else if (command == 'yerin'){
        client.commands.get('yerin').execute(message, args, Discord)
    }     
});

client.login('BOT_TOKEN_HERE');
