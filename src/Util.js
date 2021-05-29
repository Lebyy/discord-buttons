const styles = {
    'blurple': 1,
    'gray': 2,
    'green': 3,
    'red': 4,
    'url': 5
};

module.exports = {
    resolveStyle(style) {

        if (!style || style === undefined || style === null) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (!styles[style] || styles[style] === undefined || styles[style] === null) throw new TypeError('INVALID_BUTTON_STYLE: An invalid button styles was provided');

        return styles[style] || style;
    },
    resolveButton(data) {

        if (!data.style) throw new TypeError('NO_BUTTON_STYLE: Please provide button style');

        if (!data.label && !data.emoji) throw new TypeError('NO_BUTTON_LABEL_AND_EMOJI: Please provide button label and/or emoji');

        if (data.style === 5) {
            if (!data.url) throw new TypeError('NO_BUTTON_URL: You provided url style, you must provide an URL');
        } else {
            if (!data.custom_id) throw new TypeError('NO_BUTTON_ID: Please provide button id');
        }

        if (data.emoji) {
            if (isNaN(data.emoji ? data.emoji.id : 0) && !this.isEmoji(data.emoji.name)) throw new TypeError('INCORRECT_EMOJI_ID: Please provide correct emoji id');
        }

        return {
            style: data.style,
            label: data.label,
            emoji: data.emoji,
            disabled: Boolean(data.disabled),
            url: data.url,
            custom_id: data.custom_id,
            type: 2
        }
    },
    checkDjsVersion() {
        let version = require('discord.js').version.split('');

        if (parseInt(version[0] + version[1]) > 11) {
            return true;
        } else {
            return false;
        }
    },
      
    isEmoji(string) {
        var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
        return regex.test(string)
    }
}
