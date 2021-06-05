const { sendAPICallback } = require("./APIMessage");
const WebhookClient = require("./WebhookClient");
const Message = require("./Message");

class ButtonEvent {
  constructor(client, data) {
    this.client = client;

    this.id = data.data.custom_id;

    this.version = data.version;

    this.token = data.token;

    this.discordID = data.id;

    this.applicationID = data.application_id;

    this.guild = data.guild_id
      ? client.guilds.cache.get(data.guild_id)
      : undefined;

    this.channel = client.channels.cache.get(data.channel_id);

    this.clicker = {
      user: this.client.users.resolve(
        data.guild_id ? data.member.user.id : data.user.id
      ),
      member: this.guild
        ? this.guild.members.resolve(data.member.user.id)
        : undefined,
      fetch: async () => {
        this.clicker.user = this.client.users.resolve(
          data.guild_id ? data.member.user.id : data.user.id
        );
        if (this.guild) {
          this.clicker.member = await this.guild.members.fetch(
            data.member.user.id
          );
        }
        return true;
      },
    };

    this.message = new Message(client, data.message, this.channel);

    this.webhook = new WebhookClient(
      data.application_id,
      data.token,
      client.options
    );

    this.replied = false;

    this.deferred = false;
  }

  async defer(ephemeral = false) {
    if (this.deferred === true || this.replied === true)
      throw new Error(
        "BUTTON_ALREADY_REPLIED: The button already has a reply issued"
      );
    await this.client.api
      .interactions(this.discordID, this.token)
      .callback.post({
        data: {
          type: 6,
          data: {
            flags: ephemeral ? 1 << 6 : null,
          },
        },
      });
    this.deferred = true;
  }

  async think(ephemeral = false) {
    if (this.deferred === true || this.replied === true)
      throw new Error(
        "BUTTON_ALREADY_REPLIED: The button already has a reply issued"
      );
    await this.client.api
      .interactions(this.discordID, this.token)
      .callback.post({
        data: {
          type: 5,
          data: {
            flags: ephemeral ? 1 << 6 : null,
          },
        },
      });
    this.replied = true;
  }

  async followUp(content, options) {
    await this.webhook.send(content, options);
  }

  get reply() {
    let _send = async (content, options) => {
      if (this.deferred === true || this.replied === true)
        throw new Error(
          "BUTTON_ALREADY_REPLIED: The button already has a reply issued"
        );

      if (typeof options === "boolean" && options === true) {
        options = { flags: 1 << 6 };
      }

      let apiMessage;

      if (content instanceof sendAPICallback) {
        apiMessage = content.resolveData();
      } else {
        apiMessage = sendAPICallback
          .create(this.channel, content, options)
          .resolveData();
      }

      if (Array.isArray(apiMessage.data.content)) {
        apiMessage.data.content = apiMessage.data.content[0];
      }

      const { data: info, files } = await apiMessage.resolveFiles();
      this.replied = true;
      return await this.client.api
        .interactions(this.discordID, this.token)
        .callback.post({
          data: {
            data: info,
            type: options
              ? options.type
                ? [4, 5, 6, 7].includes(parseInt(options.type))
                  ? parseInt(options.type)
                  : 4
                : 4
              : 4,
          },
          files,
        });
    };

    let _fetch = async () => {
      const raw = await this.webhook.fetchMessage("@original");
      return this.channel ? this.channel.messages.add(raw) : raw;
    };

    let _edit = async (content, options) => {
      if (this.replied === false)
        throw new Error("BUTTON_HAS_NO_REPLY: The button doesn't have a reply issued");
      const raw = await this.webhook.editMessage("@original", content, options);
      return this.channel ? this.channel.messages.add(raw) : raw;
    };

    let _delete = async () => {
      if (this.replied === false)
        throw new Error("BUTTON_HAS_NO_REPLY: The button doesn't have a reply issued");
      return await this.webhook.deleteMessage("@original");
    };

    return {
      send: _send,
      fetch: _fetch,
      edit: _edit,
      delete: _delete,
    };
  }
}

module.exports = ButtonEvent;
