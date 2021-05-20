const { sendAPICallback } = require('../Classes/APIMessage');

module.exports = async (client, data) => {
    if (!data.message) return;
    
    if (data.data.component_type === 2) {
        
        let channel = client.channels.cache.get(data.channel_id);
        let message = await channel.messages.fetch(data.message.id);

        let clicker = {}

        if (data.guild_id) {
            clicker.member = client.guilds.cache.get(data.guild_id).members.cache.get(data.member.user.id);
            clicker.user = client.users.cache.get(data.member.user.id);
        } else {
            clicker.user = client.users.cache.get(data.user.id);
        }

        let reply = async (content, options) => {

            if (typeof (options) === 'boolean' && options === true) {
                options = { flags: 64 }
            }

            let { data: info, files } = sendAPICallback.create(client.channels.resolve(data.channel_id), content, options || {}).resolveData();

            return client.api.interactions(data.id, data.token).callback
                .post({
                    data: {
                        data: info,
                        type: parseInt(options.type) || 4,
                    },
                    files
                })
                .then(d => client.actions.MessageCreate.handle(d).message);
        };

        let callback = async () => {
            return await client.api.interactions(data.id, data.token).callback.post({ data: { type: 6 } });
        }

        client.emit('clickButton', {
            version: data.version,
            token: data.token,
            id: data.data.custom_id,
            discordId: data.id,
            applicationId: data.application_id,
            clicker: clicker,
            reply: reply,
            callback: callback,
            guild: data.guild_id ? client.guilds.cache.get(data.guild_id) : undefined,
            channel: channel,
            message: message
        })
    }
}