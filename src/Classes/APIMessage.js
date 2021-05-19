const { APIMessage } = require("discord.js");
const Util = require('../Util');
const MessageButton = require('./MessageButton');

class replyAPIMessage extends APIMessage {
    resolveData() {

        if (this.data) {
            return this;
        }

        super.resolveData();

        this.data.allowed_mentions = this.data.allowed_mentions || {};

        if (this.options.mention === undefined) {
            this.options.mention = false;
        }

        this.options.mention != false ? this.options.mention = true : this.options.mention;

        if (typeof (this.options.mention) != 'boolean') {
            throw new SyntaxError('The buttons reply mention must be a boolean | true/false');
        }

        Object.assign(this.data.allowed_mentions, {
            replied_user: this.options.mention
        })

        if (this.options.replyTo) {
            Object.assign(this.data, {
                message_reference: {
                    message_id: this.options.replyTo.id || this.options.replyTo
                }
            })
        }

        this.data.components = [
            {
                type: 1,
                components: this.options.buttons
            }
        ];

        delete this.options;

        return this;
    }
}

class sendAPIMessage extends APIMessage {
    resolveData() {

        if (this.data) {
            return this;
        }

        super.resolveData();

        this.data.components = [
            {
                type: 1,
                components: this.options.buttons
            }
        ];

        delete this.options;

        return this;
    }
}

class sendAPICallback extends APIMessage {
    resolveData() {

        if (this.data) {
            return this;
        }

        super.resolveData();

        if (this.options.flags) {
            this.data.flags = parseInt(this.options.flags);
        }

        if (typeof (this.options.ephemeral) === 'boolean' && this.options.ephemeral === true) {
            this.data.flags = 64;
        }

        delete this.options;

        return this;
    }
}

class APIMessageMain extends APIMessage {
    resolveData() {
        if (this.data) {
            return this;
        }

        super.resolveData();

        const buttonLikes = [];
        if (this.options.type === 2) {
            buttonLikes.push(Util.resolveButton(this.options));
        } else if (this.options.buttons) {
            this.options.buttons.map((x) => buttonLikes.push(Util.resolveButton(x)));
        } else if (this.options.button) {
            buttonLikes.push(Util.resolveButton(this.options.button));
        }

        const buttons = buttonLikes.map(b => new MessageButton(b).toJSON());

        if (buttons.length) {
            this.data.components = [
                {
                    type: 1,
                    components: buttons
                }
            ];
        }

        console.log(this.data.components[0].components);

        return this;
    }
}

module.exports = {
    replyAPIMessage,
    sendAPIMessage,
    sendAPICallback,
    APIMessageMain
}