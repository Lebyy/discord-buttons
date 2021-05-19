const { Structures } = require("discord.js");
const { replyAPIMessage, sendAPIMessage } = require('./APIMessage');
const { resolveStyle } = require('../Util');
const ButtonCollector = require('./ButtonCollector');

class Message extends Structures.get("Message") {

    async buttons(content, options) {

        if (!options || !options.buttons) {
            throw new Error('Please provide buttons array');
        }

        if (!Array.isArray(options.buttons)) {
            throw new Error('The buttons must be an array');
        }

        let buttons = [];

        options.buttons.forEach((x, i) => {

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

            let style = resolveStyle(x.style);

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
                "Content-Type": 'application/json'
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

        options.buttons.forEach((x, i) => {

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

            let style = resolveStyle(x.style);

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
                "Content-Type": 'application/json'
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

        options.buttons.forEach((x, i) => {

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

            let style = resolveStyle(x.style);

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
                "Content-Type": 'application/json'
            },
            data,
            files
        });
    }

    createButtonCollector(filter, options = {}) {
        return new ButtonCollector(this, filter, options);
    }

    awaitButtons(filter, options = {}) {
        return new Promise((resolve, reject) => {
            const collector = this.createButtonCollector(filter, options);
            collector.once('end', (buttons, reason) => {
                if (options.errors && options.errors.includes(reason)) {
                    reject(buttons);
                } else {
                    resolve(buttons);
                }
            });
        })
    }
}

module.exports = Message;