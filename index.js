const {Client, MessageEmbed, Collection
} = require('discord.js');
const bot = new Client;

const token = 'token'
var PREFIX = 'prefix'

const fs = require('fs');
const help = require('./Commands/help');
const commands = new Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of files) {
    const command =  require(`./commands/${file}`);
    commands.set(command.name, command)
}

bot.on('ready', () => {
    console.log('');
});

bot.on('message', message => {
    let args = message.content.substring(PREFIX.length).split(' ');

    switch (args[0]) {
        case 'ping':
            commands.get('ping').execute(message);
            break;
    
        default:
            break;

        case 'h':
            commands.get('h').execute(message, args);
            break;
        
            
            case 'help':
                commands.get('help').execute(message);
                break;
    }
})

bot.login(token);