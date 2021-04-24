const discord = require('discord.js');
const client = new discord.Client()
require('./index')

client.login('Nzg0MDk5MTI1OTkzNjY4Njkw.X8kXNw.Bt2mBs2oxw8Y75ChGeDFOkzYOYc');

client.on('ready', () => console.log(client.user.tag));

client.on('message', async message => {
    message.startButtonChecking()
    if (message.content.startsWith('o')) {
        let embed = new discord.MessageEmbed()
            .setAuthor('ohes');
        message.buttons('Hello World!', {
            buttons: [
                {
                    style: 'green',
                    label: 'Click to function!',
                    id: 'click_to_function'
                },
                {
                    style: 'url',
                    label: 'Vote for me!',
                    url: 'https://google.com',
                    disabled: true
                }
            ],
            //embed: embed
        })
    }
})

client.on('clickButton', button => {
    let embed = new discord.MessageEmbed()
    .setAuthor('op');

    if (button.id === 'click_to_function') {
        button.message.edit('po')
    }
})