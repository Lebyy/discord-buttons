export = MessageButton;
declare class MessageButton extends BaseMessageComponent {
    constructor(data?: {});
    setup(data: any): MessageButton;
    style: string;
    label: string;
    disabled: boolean;
    emoji: { name?: string, id?: string, animated?: boolean };
    url: string;
    custom_id: string;
    setStyle(style: any): MessageButton;
    setLabel(label: any): MessageButton;
    setDisabled(disabled?: boolean): MessageButton;
    setURL(url: string): MessageButton;
    setID(id: string): MessageButton;
    setEmoji(emoji: string | ({ name: string } | {id: string, animated?: boolean}), animated?: boolean): MessageButton;
    toJSON(): {
        type: string;
        style: string | null;
        label: string;
        emoji: string | undefined;
        disabled: boolean;
        url: string | undefined;
        custom_id: string;
    };
}
import BaseMessageComponent = require("./interfaces/BaseMessageComponent");
