export = CommandInteraction;
declare class CommandInteraction {
    constructor(client: any, data: any);
    webhook: WebhookClient;
    reply(content: any, options: any): Promise<void>;
    replied: boolean;
    followUp(content: any, options: any): Promise<any>;
    editReply(content: any, options: any): Promise<any>;
}
import WebhookClient = require("../../v12/Classes/WebhookClient");
