export = exports;
declare class exports {
    editMessage(message: any, content: any, options: any): Promise<any>;
    deleteMessage(message: any): Promise<void>;
    fetchMessage(message: any, cache?: boolean): Promise<any>;
}
