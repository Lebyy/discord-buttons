export = ButtonCollector;
declare class ButtonCollector extends Collector<any, any> {
    static key(button: any): any;
    constructor(message: any, filter: any, options?: {});
    message: any;
    users: Collection<any, any>;
    total: number;
    empty(): void;
    _handleChannelDeletion(channel: any): void;
    _handleGuildDeletion(guild: any): void;
    _handleMessageDeletion(message: any): void;
}
import { Collector } from "discord.js";
import Collection_1 = require("discord.js");
import Collection = Collection_1.Collection;
