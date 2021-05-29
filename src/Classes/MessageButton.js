const { resolveStyle, isEmoji } = require('../Util');
const { resolveString } = require('discord.js').Util;

class MessageButton {

    constructor(data = {}) {
        this.setup(data);
    }

    setup(data) {

        if(data.style && data.style == 'gray') data.style = 'grey';
        this.style = 'style' in data ? resolveStyle(resolveString(data.style)) : null;

        this.label = 'label' in data ? resolveString(data.label) : null;

        this.disabled = 'disabled' in data ? Boolean(data.disabled) : false;

        if (this.style === 5) {
            this.url = 'url' in data ? resolveString(data.url) : null;
        } else {
            this.custom_id = 'id' in data ? resolveString(data.id): null;
        }

        this.type = 2;

        return this;
    }

    setStyle(style) {
        style = resolveStyle(resolveString(style));
        this.style = style;
        return this;
    }

    setLabel(label) {
        label = resolveString(label);
        this.label = label;
        return this;
    }

    setDisabled(boolean = false) {
        this.disabled = boolean;
        return this;
    }

    setURL(url) {
        this.url = this.style === 5 ? resolveString(url) : null;
        return this;
    }

    setID(id) {
        this.custom_id = this.style === 5 ? null : resolveString(id);
        return this;
    }

    setEmoji(emoji) {
        if (isEmoji(resolveString(emoji)) === true) this.emoji = { name: resolveString(emoji) }
        else if (emoji.id) this.emoji = { id: emoji.id }
        else if (resolveString(emoji).length > 0) this.emoji = { id: resolveString(emoji) }
        else this.emoji = { name: null, id: null };
        return this;
    }

    toJSON() {
        return {
            type: 2,
            style: this.style,
            label: this.label,
            emoji: this.emoji,
            disabled: this.disabled,
            url: this.url,
            custom_id: this.custom_id
        }
    }

}

module.exports = MessageButton;
