export = MessageActionRow;
declare class MessageActionRow extends BaseMessageComponent {
    constructor(data?: {});
    setup(data: any): MessageActionRow;
    component: MessageActionRow | import("./MessageButton");
    components: any;
    addComponents(...components: any[]): MessageActionRow;
    addComponent(component: any): MessageActionRow;
    toJSON(): {
        components: any;
        type: any;
    };
}
import BaseMessageComponent = require("./interfaces/BaseMessageComponent");
