const { APIMessage: dAPIMessage } = require("discord.js");
const Util = require("../Util");
const { MessageComponentTypes } = require("../Constants.js");
const BaseMessageComponent = require("./interfaces/BaseMessageComponent");
const MessageActionRow = require("./MessageActionRow");

class sendAPICallback extends dAPIMessage {
  resolveData() {
    if (this.data) {
      return this;
    }

    super.resolveData();

    if (this.options.flags) {
      this.data.flags = parseInt(this.options.flags);
    }

    if (
      typeof this.options.ephemeral === "boolean" &&
      this.options.ephemeral === true
    ) {
      this.data.flags = 64;
    }

    let components = [];
    if (MessageComponentTypes[this.options.type]) {
      let buttons = [];

      buttons.push(
        BaseMessageComponent.create(Util.resolveButton(this.options))
      );
      components.push({
        type: MessageComponentTypes["ACTION_ROW"],
        components: buttons,
      });
    } else if (this.options.component) {
      if (this.options.component instanceof MessageActionRow) {
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: this.options.component.components.map((b) =>
            BaseMessageComponent.create(Util.resolveButton(b))
          ),
        });
      } else {
        let buttons = [];
        buttons.push(
          BaseMessageComponent.create(
            Util.resolveButton(this.options.component)
          )
        );
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: buttons,
        });
      }
    } else if (this.options.components) {
      if (Array.isArray(this.options.components)) {
        components.push(
          ...this.options.components.map((c) => {
            let buttons = [];

            buttons.push(
              ...c.components.map((b) =>
                BaseMessageComponent.create(Util.resolveButton(b))
              )
            );

            return {
              type: MessageComponentTypes.ACTION_ROW,
              components: buttons,
            };
          })
        );
      } else {
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: this.options.components.components.map((b) =>
            BaseMessageComponent.create(Util.resolveButton(b))
          ),
        });
      }
    }

    if (typeof components.length == "number") {
      this.data.components = components.length === 0 ? [] : components;
    }

    return this;
  }
}

class APIMessage extends dAPIMessage {
  resolveData() {
    if (this.data) {
      return this;
    }

    super.resolveData();

    let components = [];
    if (MessageComponentTypes[this.options.type]) {
      let buttons = [];

      buttons.push(
        BaseMessageComponent.create(Util.resolveButton(this.options))
      );
      components.push({
        type: MessageComponentTypes["ACTION_ROW"],
        components: buttons,
      });
    }

    if (this.options.component) {
      if (this.options.component instanceof MessageActionRow) {
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: this.options.component.components.map((b) =>
            BaseMessageComponent.create(Util.resolveButton(b))
          ),
        });
      } else {
        let buttons = [];
        buttons.push(
          BaseMessageComponent.create(
            Util.resolveButton(this.options.component)
          )
        );
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: buttons,
        });
      }
    }

    if (this.options.components) {
      if (Array.isArray(this.options.components)) {
        components.push(
          ...this.options.components.map((c) => {
            let buttons = [];

            buttons.push(
              ...c.components.map((b) =>
                BaseMessageComponent.create(Util.resolveButton(b))
              )
            );

            return {
              type: MessageComponentTypes.ACTION_ROW,
              components: buttons,
            };
          })
        );
      } else {
        components.push({
          type: MessageComponentTypes.ACTION_ROW,
          components: this.options.components.components.map((b) =>
            BaseMessageComponent.create(Util.resolveButton(b))
          ),
        });
      }
    }

    if (typeof components.length == "number") {
      this.data.components = components.length === 0 ? [] : components;
    }

    return this;
  }
}

module.exports = {
  sendAPICallback,
  APIMessage,
};
