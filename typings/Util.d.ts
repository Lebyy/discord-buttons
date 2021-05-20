export function resolveStyle(style: string): string;
export function resolveButton(button: object): {
    style: string;
    label: string;
    disabled: boolean;
    url: string;
    custom_id: string;
    type: number;
};
export function checkDjsVersion(): boolean;