const { Structures, Client } = require("discord.js");

var version = require('discord.js').version.split('');
version = parseInt(version[0] + version[1]);

module.exports = (client) => {

    if (version < 11 || version === 11) {
        throw new Error('The discord.js version must be v12 or high');
    }

    if (!client || !client instanceof Client) throw new Error("INVALID_CLIENT_PROVIDED: The discord.js client is not provided or is invalid...")

    const TextChannel = require('./v12/Classes/TextChannel');
    const DMChannel = require('./v12/Classes/DMChannel');
    const NewsChannel = require('./v12/Classes/NewsChannel');

    Structures.extend('TextChannel', () => TextChannel);
    Structures.extend('DMChannel', () => DMChannel);
    Structures.extend('NewsChannel', () => NewsChannel);

    if (version === 12) {
        const Message = require('./v12/Classes/Message');
        Structures.extend('Message', () => Message);
    } else if (version === 13) {
        const Message = require('./v13/Classes/Message');
        const CommandInteraction = require('./v13/Classes/CommandInteraction');
        Structures.extend('Message', () => Message);
        Structures.extend('CommandInteraction', () => CommandInteraction);
    }

    client.ws.on('INTERACTION_CREATE', (data) => {

        if (!data.message) return;

        if (data.data.component_type) {
            const INTERACTION_CREATE = require('./v12/Classes/INTERACTION_CREATE');
            const button = new INTERACTION_CREATE(client, data);

            client.emit('clickButton', button);
        }
    });

    return;
}

module.exports.MessageButton = require(`./v${version}/Classes/MessageButton`);
module.exports.MessageActionRow = require('./v12/Classes/MessageActionRow');
module.exports.ButtonInteraction = require('./v12/Classes/INTERACTION_CREATE');