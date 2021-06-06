const { Structures } = require("discord.js");
const ButtonCollector = require("./ButtonCollector");
const APIMessage = require("../../v12/Classes/APIMessage").APIMessage;
const BaseMessageComponent = require("../../v12/Classes/interfaces/BaseMessageComponent");

class Message extends Structures.get("Message") {
  _patch(data) {
    super._patch(data);
    this.components = (data.components || []).map((c) =>
      BaseMessageComponent.create(c, this.client)
    );
    return this;
  }

  createButtonCollector(filter, options = {}) {
    return new ButtonCollector(this, filter, options);
  }

  awaitButtons(filter, options = {}) {
    return new Promise((resolve, reject) => {
      const collector = this.createButtonCollector(filter, options);
      collector.once("end", (buttons, reason) => {
        if (options.errors && options.errors.includes(reason)) {
          reject(buttons);
        } else {
          resolve(buttons);
        }
      });
    });
  }

  reply(content, options) {
    return this.channel.send(
      content instanceof APIMessage
        ? content
        : APIMessage.transformOptions(content, options, {
            reply: {
              messageReference: this,
              failIfNotExists:
                options?.failIfNotExists ?? content?.failIfNotExists ?? true,
            },
          })
    );
  }

  edit(content, options) {
    options =
      content instanceof APIMessage
        ? content
        : APIMessage.create(this, content, options);
    return this.channel.messages.edit(this.id, options);
  }
}

module.exports = Message;
