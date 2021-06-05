export = NewsChannel;
declare class NewsChannel {
    send(content: any, options: any): Promise<any>;
}
