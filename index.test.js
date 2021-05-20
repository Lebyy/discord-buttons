const discord = require('discord.js');
const client = new discord.Client()
const disbut = require('./src/index')(client);

client.on('ready', () => console.log(client.user.tag));
//client.on('debug', console.log);

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('o')) {

        /*await message.channel.messages.fetch();

        let m = message;
        message = await message.channel.messages.fetch('836138144910409748');

        const filter = (button) => button;
        const collector = await message.awaitButtons(filter, { time: 15 * 1000 });

        console.log(collector)*/

        let btn = new disbut.MessageButton()
            .setLabel('s');

        message.reply('hi', btn);
        //message.author.send('p', btn);

    }
})

client.on('clickButton', button => {
    button.callback()

    let btn = new disbut.MessageButton()
        .setLabel('o')

    button.message.edit('o', btn)
});

client.login();