const discord = require('discord.js');
const client = new discord.Client()
require('./src/index')(client)

client.on('ready', () => console.log(client.user.tag));

client.on('message', async message => {
    if (message.content.startsWith('o')) {

        let embed = new discord.MessageEmbed()
            .setAuthor('test');

        message.buttons('Hi sir, i am powered by https://npmjs.com/discord-buttons !', {
            buttons: [
                {
                    style: 'red',
                    label: 'Click to edit!',
                    id: 'click_to_function'
                }
            ],
            //embed: embed,
            //mention: false
        })
    }
})

client.on('clickButton', button => {
    if (button.id === 'click_to_function') {
        button.message.edit('wow')
    }
});

client.login('');