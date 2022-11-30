declare function parseColor(color: any): {
    hex: string;
    alpha: any;
    rgb: any[];
    rgba: any[];
    hsl: any[];
    hsla: any[];
};
export function style(color: any): string;
export { parseColor as parse };
