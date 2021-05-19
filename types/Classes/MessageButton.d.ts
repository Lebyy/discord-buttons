export = MessageButton;
declare class MessageButton {
    constructor(data?: {});
    setup(data: any): MessageButton;
    style: any;
    label: any;
    disabled: any;
    url: string;
    custom_id: string;
    type: number;
    setStyle(style: any): MessageButton;
    setLabel(label: any): MessageButton;
    setDisabled(boolean: any): MessageButton;
    setURL(url: any): MessageButton;
    setID(id: any): MessageButton;
    toJSON(): {
        type: number;
        style: any;
        label: any;
        disabled: any;
        url: string;
        custom_id: string;
    };
}
