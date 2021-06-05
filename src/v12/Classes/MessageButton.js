const { MessageComponentTypes } = require("../Constants.js");
const BaseMessageComponent = require("./interfaces/BaseMessageComponent");
const { resolveString } = require("discord.js").Util;
const { resolveStyle, isEmoji } = require("../Util");

class MessageButton extends BaseMessageComponent {
  constructor(data = {}) {
    super({ type: "BUTTON" });
    this.setup(data);
  }

  setup(data) {
    this.style = "style" in data ? resolveStyle(data.style) : null;

    this.label =
      "label" in data && data.label ? resolveString(data.label) : undefined;

    this.disabled = "disabled" in data ? data.disabled : false;

    this.emoji = "emoji" in data ? data.emoji : undefined;

    if ("url" in data && data.url) this.url = resolveString(data.url);
    else this.url = undefined;

    if (("id" in data && data.id) || ("custom_id" in data && data.custom_id))
      this.custom_id = data.id || data.custom_id;
    else this.custom_id = undefined;

    return this;
  }

  setStyle(style) {
    style = resolveStyle(style);
    this.style = style;
    return this;
  }

  setLabel(label) {
    label = resolveString(label);
    this.label = label;
    return this;
  }

  setDisabled(disabled = true) {
    this.disabled = disabled;
    return this;
  }

  setURL(url) {
    this.url = resolveString(url);
    return this;
  }

  setID(id) {
    this.custom_id = resolveString(id);
    return this;
  }

  setEmoji(emoji, animated) {
    if (!emoji) return this;
    if (isEmoji(emoji) === true) this.emoji = { name: resolveString(emoji) };
    else if (emoji.id) this.emoji = { id: emoji.id };
    else if (resolveString(emoji).length > 0)
      this.emoji = { id: resolveString(emoji) };
    else this.emoji = { name: null, id: null };
    if (
      (animated && typeof animated !== "boolean") ||
      (emoji.animated && typeof emoji.animated !== "boolean")
    )
      throw new SyntaxError("Emoji Animated option must be either true or false");
    if (this.emoji && typeof emoji.animated === "boolean")
      this.emoji.animated = emoji.animated;
    if (this.emoji && typeof animated === "boolean")
      this.emoji.animated = animated;
    return this;
  }

  toJSON() {
    return {
      type: MessageComponentTypes.BUTTON,
      style: this.style,
      label: this.label,
      emoji: this.emoji,
      disabled: this.disabled,
      url: this.url,
      custom_id: this.custom_id,
    };
  }
}

module.exports = MessageButton;
