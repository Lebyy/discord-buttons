const discord = require('discord.js');
const client = new discord.Client()
const disbut = require('./src/index');
disbut(client)
const Util = require('./src/v12/Util');

client.on('ready', () => console.log(client.user.tag));
//client.on('debug', console.log);

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('o')) {

let btn = new disbut.MessageButton()
    .setEmoji('785062885952192512')
    .setStyle('grey')
    .setID('testid')
    .setEmoji('535993902180859914')
let group1 = new disbut.MessageActionRow()
    .addComponent(btn)
    .addComponent(btn);
let group2 = new disbut.MessageActionRow()
    .addComponent(btn)
    .addComponent(btn);
message.awaitButtons()
message.channel.send(`Wumpus!!!`, { component: group1 });
    } else if (message.content.startsWith('s')) {
        message.channel.send('sbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopap\naaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuusbuwbdsjndsjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdnkalsnsnsjne dncmsdbh f nrjhknbhnkjrsfnhsdn  rjrjrjrrrrrrrrrrrrrrrrrrrriojaiudhfurjsbvisnfadhiuhsiuzdravei az se kazvam angelo priqtno mi e hahadajidsjidjaisssssssssssssssssssssjuhuifsbebdhsfhdsbfhwbahfdbfbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbwuiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiibbbbbbbbbbbbbbbbbbbbqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqiiiiiiiiiiiiiiiiiiiiiiiiiibbbdkkkkkkkkkkkkkkkkkkkiwhqksjdhbcuaaaaaaaaaaaaaaaaaaaaaaaaaaudhdncbdjsjooooooooooooooooooooooooooooqqqqqqqqqqqqwwwwwwwwwwwwwwwweeeeeeeeeeeeeeeeerrrrrrrrrrrrrrrrttttttttttttttttyyyyyyyyyyyyyyyyuuuuuuuuuuuuuiooooooooooooooooppppppppppppppppppppaaaaaaaaaaasssssssssbbbbbbbbdksndjjjjjjjjjjjjjjjjjjsssssssssssssssssssssssssssssssssadwdabhsbsdgysdhagdagyydihbsbgggggdyeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedbjskjjddddddddddddddddddddddddddddddddddddddddddddddddduwebsddusiudijbuibiabdiugdebiuwbwaibewuafgwifuggggggggggggggggggggggggggggggggggggggggggssssssssssssssssssooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooohsaifhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhweuiooooooooooooooooooooooooooooooooopapaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaufhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhheuwfuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', {
            tts: true,
            split: true
        })
    }
})

client.on('clickButton', async (button) => {

    //console.log(button.clicker.user.tag, button.clicker.member?.tag);
    await button.clicker.fetch();
    console.log(button.clicker.user.tag, button.clicker.member.roles.cache.size);

    if (button.clicker.user.id === '519759839673581568') {
        button.channel.send(`SPAMMER SMOTAN BUG ${button.clicker.member}`)
    }

    await button.defer();
    const utilityembed = new discord.MessageEmbed()
        .setDescription(`Clicked by ${button.clicker.user.tag}`);

    let btn = new disbut.MessageButton()
        .setEmoji('785062885952192512')
        .setID('d')
        .setStyle('blurple');

    await button.message.edit('hi', { button: null });
});

client.login('');

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}