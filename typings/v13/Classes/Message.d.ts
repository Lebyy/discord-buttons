export = Message;
declare class Message {
    _patch(data: any): Message;
    components: any;
    createButtonCollector(filter: any, options?: {}): ButtonCollector;
    awaitButtons(filter: any, options?: {}): any;
    reply(content: any, options: any): any;
    edit(content: any, options: any): any;
}
import ButtonCollector = require("./ButtonCollector");
