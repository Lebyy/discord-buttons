const styles = {
    'blurple': 1,
    'gray': 2,
    'green': 3,
    'red': 4,
    'url': 5
};

module.exports = {
    resolveStyle(style) {

        if (!style || style === undefined) {
            style = Object.keys(styles)[0];
        }

        if (!Object.keys(styles).includes(style)) {
            style = Object.keys(styles)[0];
        }

        return styles[style];
    },
    resolveButton(button) {
        return {
            style: button.style,
            label: button.label,
            disabled: button.disabled,
            url: button.url,
            custom_id: button.custom_id,
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
    }
}