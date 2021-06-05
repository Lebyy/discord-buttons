export = MessageButton;
declare class MessageButton extends BaseMessageComponent {
    constructor(data?: {});
    setup(data: any): MessageButton;
    style: any;
    label: any;
    disabled: any;
    emoji: any;
    url: any;
    custom_id: any;
    setStyle(style: any): MessageButton;
    setLabel(label: any): MessageButton;
    setDisabled(disabled?: boolean): MessageButton;
    setURL(url: any): MessageButton;
    setID(id: any): MessageButton;
    setEmoji(emoji: any, animated: any): MessageButton;
    toJSON(): {
        type: any;
        style: any;
        label: any;
        emoji: any;
        disabled: any;
        url: any;
        custom_id: any;
    };
}
import BaseMessageComponent = require("../../v12/Classes/interfaces/BaseMessageComponent");
