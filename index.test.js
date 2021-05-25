const discord = require('discord.js');
const client = new discord.Client()
const disbut = require('./src/index')(client);
const Util = require('./src/Util');

client.on('ready', () => console.log(client.user.tag));
//client.on('debug', console.log);

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('o')) {

        await message.channel.messages.fetch();

        let m = message;
        message = await message.channel.messages.fetch('836158764545343538');

        const filter = (button) => button;
        const collector = await message.awaitButtons(filter, { time: 5000 });

        let btn = new disbut.MessageButton()
            .setLabel('s');

        message.channel.send(`j`);
        //message.author.send('p', btn);

    }
})

client.on('clickButton', async (button) => {
    console.log(button)
    //button.defer()

    let embed = new discord.MessageEmbed()
        .setDescription('I AM COOL GUY');

    let btn = new disbut.MessageButton()
        .setStyle('red')
        .setLabel('OMG I AM COOL')
        .setID('ang')

    let btn2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('U cant click')
        .setURL('https://discord.com')
        .setDisabled()

    button.think(true)

    await wait(1000);

    button.reply.edit('Yeah, it\'s working', { buttons: [btn] });

    await wait(1000);

    button.reply.edit('trueee', btn2)
});

client.login('');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}