export = ButtonCollector;
declare class ButtonCollector {
    constructor(message: any, filter: any, options?: {});
    message: any;
    users: any;
    total: number;
    empty(): void;
    _handleChannelDeletion(channel: any): void;
    _handleGuildDeletion(guild: any): void;
    _handleMessageDeletion(message: any): void;
    collect(button: any): any;
    get endReason(): "limit" | "buttonLimit" | "userLimit";
}
