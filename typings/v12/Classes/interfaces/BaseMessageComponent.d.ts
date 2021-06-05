export = BaseMessageComponent;
declare class BaseMessageComponent {
    static create(data: any): import("../MessageActionRow") | import("../MessageButton");
    constructor(data: any);
    type: any;
}
