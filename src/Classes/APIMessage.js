const { APIMessage } = require("discord.js");
const Util = require('../Util');
const MessageButton = require('./MessageButton');

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

        return this;
    }
}

module.exports = {
    APIMessageMain
}