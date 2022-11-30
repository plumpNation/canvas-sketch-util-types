export function mod(a: any, b: any): number;
export function fract(n: any): number;
export function sign(n: any): 0 | 1 | -1;
export function degToRad(n: any): number;
export function radToDeg(n: any): number;
import wrap = require(".pnpm/canvas-sketch-util@1.10.0/node_modules/canvas-sketch-util/lib/wrap");
export function pingPong(t: any, length: any): number;
export function linspace(n: any, opts: any): number[];
export function lerp(min: any, max: any, t: any): number;
export function lerpArray(min: any, max: any, t: any, out: any): any;
export function inverseLerp(min: any, max: any, t: any): number;
export function lerpFrames(values: any, t: any, out: any): any;
export function clamp(value: any, min: any, max: any): any;
export function clamp01(v: any): any;
export function smoothstep(min: any, max: any, t: any): number;
export function damp(a: any, b: any, lambda: any, dt: any): number;
export function dampArray(a: any, b: any, lambda: any, dt: any, out: any): any;
export function mapRange(value: any, inputMin: any, inputMax: any, outputMin: any, outputMax: any, clamp: any): any;
export declare function expand2D(p: any, defaultValue: any): any[];
export declare function expand3D(p: any, defaultValue: any): any[];
export declare function expand4D(p: any, defaultValue: any): any[];
export { wrap };