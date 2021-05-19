/// <reference types="discord.js" />
export = Message;
declare const Message_base: typeof import("discord.js").Message;
declare class Message extends Message_base {
    buttons(content: any, options: any): Promise<button>;
    buttonsEdit(content: any, options: any): Promise<button>;
    buttonsReply(content: any, options: any): Promise<button>;
    createButtonCollector(filter: any, options?: {}): ButtonCollector;
    awaitButtons(filter: any, options?: {}): Promise<Array>;
}
import ButtonCollector = require("./ButtonCollector");
