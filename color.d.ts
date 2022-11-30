export function relativeLuminance(color: any): number;
export function contrastRatio(colorA: any, colorB: any): number;
export function offsetHSL(color: any, h: any, s: any, l: any): {
    hex: string;
    alpha: any;
    rgb: any[];
    rgba: any[];
    hsl: any[];
    hsla: any[];
};
export function blend(background: any, foreground: any, opacity: any): {
    hex: string;
    alpha: any;
    rgb: any[];
    rgba: any[];
    hsl: any[];
    hsla: any[];
};
import hexToRGBA = require(".pnpm/canvas-sketch-util@1.10.0/node_modules/canvas-sketch-util/lib/hex-to-rgba");
import RGBAToHex = require(".pnpm/canvas-sketch-util@1.10.0/node_modules/canvas-sketch-util/lib/rgba-to-hex");
export { parse, style, names, hexToRGBA, RGBAToHex, RGBAToHSLA, HSLAToRGBA };
