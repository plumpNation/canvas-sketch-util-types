import wrap = require("./lib/wrap");

export function mod(a: number, b: number): number;
export function fract(n: number): number;
export function sign(n: number): 0 | 1 | -1;
export function degToRad(n: number): number;
export function radToDeg(n: number): number;
export function pingPong(t: number, length: number): number;

export function linspace(n: number, opts?: boolean | {
  endpoint?: boolean;
  offset?: number;
}): number[];

export function lerp(min: number, max: number, t: number): number;
export function lerpArray(min: number, max: number, t: number, out?: number[]): number[];
export function inverseLerp(min: number, max: number, t: number): number;
export function lerpFrames(values: number[] | number[][], t: number, out: number[]): number[];
export function clamp(value: number, min: number, max: number): number;
export function clamp01(v: number): number;
export function smoothstep(min: number, max: number, t: number): number;
export function damp(a: number, b: number, lambda: number, dt: number): number;
export function dampArray(a: number[], b: number[], lambda: any, dt: any, out?: number[]): number[];
export function mapRange(value: number, inputMin: number, inputMax: number, outputMin: number, outputMax: number, clamp?: boolean): number;
export declare function expand2D(p: number | null | undefined, defaultValue: number): number[];
export declare function expand3D(p: number | null | undefined, defaultValue: number): number[];
export declare function expand4D(p: number | null | undefined, defaultValue: number): number[];

export { wrap }