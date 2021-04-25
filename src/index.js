const { Structures } = require("discord.js");
const { replyAPIMessage, sendAPIMessage } = require('./APIMessage');

class Message extends Structures.get("Message") {

    async buttons(content, options) {

        if (!options || !options.buttons) {
            throw new Error('Please provide buttons array');
        }

        if (!Array.isArray(options.buttons)) {
            throw new Error('The buttons must be an array');
        }

        let buttons = [];
        let styles = {
            'blupurple': 1,
            'grey': 2,
            'green': 3,
            'red': 4,
            'url': 5
        };

        options.buttons.forEach((x, i) => {
            if (!x.style) x.style = 'blupurple';

            if (!Object.keys(styles).includes(x.style)) {
                throw new Error(`#${i} button has invalid style, recived ${x.style}`);
            }

            if (!x.label) {
                throw new Error(`#${i} button don't has a label`);
            }

            if (typeof (x.label) !== 'string') x.label = String(x.label);

            if (x.style === 'url') {
                if (!x.url) {
                    throw new Error(`If the button style is "url", you must provide url`);
                }
            } else {
                if (!x.id) {
                    throw new Error(`If the button style is not "url", you must provide id`);
                }
            }

            x.disabled = Boolean(x.disabled);

            let style = styles[x.style];

            let data = {
                type: 2,
                style: style,
                label: x.label,
                custom_id: x.style === 'url' ? null : x.id,
                url: x.style === 'url' ? x.url : null,
                disabled: x.disabled || false
            }

            buttons.push(data);
        })

        options.buttons = buttons;

        let { data, files } = sendAPIMessage.create(this, content, options).resolveData();

        this.client.api.channels[this.channel.id].messages.post({
            headers: {
                "Content-Type": 'applications/json'
            },
            data,
            files
        });
    }

    async buttonsEdit(content, options) {

        if (!options || !options.buttons) {
            throw new Error('Please provide buttons array');
        }

        if (!Array.isArray(options.buttons)) {
            throw new Error('The buttons must be an array');
        }

        let buttons = [];
        let styles = {
            'blupurple': 1,
            'grey': 2,
            'green': 3,
            'red': 4,
            'url': 5
        };

        options.buttons.forEach((x, i) => {
            if (!x.style) x.style = 'blupurple';

            if (!Object.keys(styles).includes(x.style)) {
                throw new Error(`#${i} button has invalid style, recived ${x.style}`);
            }

            if (!x.label) {
                throw new Error(`#${i} button don't has a label`);
            }

            if (typeof (x.label) !== 'string') x.label = String(x.label);

            if (x.style === 'url') {
                if (!x.url) {
                    throw new Error(`If the button style is "url", you must provide url`);
                }
            } else {
                if (!x.id) {
                    throw new Error(`If the button style is not "url", you must provide id`);
                }
            }

            x.disabled = Boolean(x.disabled);

            let style = styles[x.style];

            let data = {
                type: 2,
                style: style,
                label: x.label,
                custom_id: x.style === 'url' ? null : x.id,
                url: x.style === 'url' ? x.url : null,
                disabled: x.disabled || false
            }

            buttons.push(data);
        })

        options.buttons = buttons;

        let { data, files } = replyAPIMessage.create(this, content, options).resolveData();

        this.client.api.channels[this.channel.id].messages[this.id].patch({
            headers: {
                "Content-Type": 'applications/json'
            },
            data,
            files
        });
    }

    async buttonsReply(content, options) {

        if (!options || !options.buttons) {
            throw new Error('Please provide buttons array');
        }

        if (!Array.isArray(options.buttons)) {
            throw new Error('The buttons must be an array');
        }

        let buttons = [];
        let styles = {
            'blupurple': 1,
            'grey': 2,
            'green': 3,
            'red': 4,
            'url': 5
        };

        options.buttons.forEach((x, i) => {
            if (!x.style) x.style = 'blupurple';

            if (!Object.keys(styles).includes(x.style)) {
                throw new Error(`#${i} button has invalid style, recived ${x.style}`);
            }

            if (!x.label) {
                throw new Error(`#${i} button don't has a label`);
            }

            if (typeof (x.label) !== 'string') x.label = String(x.label);

            if (x.style === 'url') {
                if (!x.url) {
                    throw new Error(`If the button style is "url", you must provide url`);
                }
            } else {
                if (!x.id) {
                    throw new Error(`If the button style is not "url", you must provide id`);
                }
            }

            x.disabled = Boolean(x.disabled);

            let style = styles[x.style];

            let data = {
                type: 2,
                style: style,
                label: x.label,
                custom_id: x.style === 'url' ? null : x.id,
                url: x.style === 'url' ? x.url : null,
                disabled: x.disabled || false
            }

            buttons.push(data);
        })

        options.buttons = buttons;

        let { data, files } = replyAPIMessage.create(this, content, options, { replyTo: this }).resolveData();

        this.client.api.channels[this.channel.id].messages.post({
            headers: {
                "Content-Type": 'applications/json'
            },
            data,
            files
        });
    }
}

Structures.extend("Message", () => Message);


module.exports = (client) => {
    client.ws.on('INTERACTION_CREATE', async (data) => {

        let typeStyles = {
            1: 'blupurple',
            2: 'grey',
            3: 'green',
            4: 'red',
            5: 'url'
        };

        await client.channels.cache.get(data.channel_id).messages.fetch();

        let clicker = client.users.fetch(data.member.user.id) || client.users.cache.get(data.member.user.id);

        await client.api.interactions(data.id, data.token).callback.post({ data: { type: 6 } });

        client.emit('clickButton', {
            version: data.version,
            type: data.type,
            style: typeStyles[data.type],
            token: data.token,
            id: data.data.custom_id,
            discordId: data.id,
            applicationId: data.application_id,
            clicker: clicker,
            message
        })
    });
}