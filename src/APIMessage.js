const { APIMessage } = require("discord.js");

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

        if (this.data.message_reference) {
            delete this.data.message_reference;
        }

        return this;
    }
}

module.exports = {
    replyAPIMessage: replyAPIMessage,
    sendAPIMessage: sendAPIMessage
}