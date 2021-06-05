export = ButtonEvent;
declare class ButtonEvent {
    constructor(client: any, data: any);
    client: any;
    id: any;
    version: any;
    token: any;
    discordID: any;
    applicationID: any;
    guild: any;
    channel: any;
    clicker: {
        user: any;
        member: any;
        fetch: () => Promise<boolean>;
    };
    message: Message;
    webhook: WebhookClient;
    replied: boolean;
    deferred: boolean;
    defer(ephemeral?: boolean): Promise<void>;
    think(ephemeral?: boolean): Promise<void>;
    followUp(content: any, options: any): Promise<void>;
    get reply(): {
        send: (content: any, options: any) => Promise<void>;
        fetch: () => Promise<any>;
        edit: (content: any, options: any) => Promise<any>;
        delete: () => Promise<void>;
    };
}
import Message = require("./Message");
import WebhookClient = require("./WebhookClient");
