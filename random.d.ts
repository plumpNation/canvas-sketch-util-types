import { Options as SeedOptions } from 'seed-random';

export function value(): number;
export function setSeed(seed: string | number, opt: SeedOptions): void;
export function getSeed(): string | number;
export function getRandomSeed(): string;
export function valueNonZero(): number;
export function permuteNoise(): void;
export function noise1D(x: number, frequency: number, amplitude: number): number;
export function noise2D(x: number, y: number, frequency: number, amplitude: number): number;
export function noise3D(x: number, y: number, z: number, frequency: number, amplitude: any): number;
export function noise4D(x: number, y: number, z: number, w: number, frequency: number, amplitude: number): number;
export function sign(): 1 | -1;
export function boolean(): boolean;
export function chance(n: number): boolean;
export function range(min: number, max: number): number;
export function rangeFloor(min: number, max: number): number;
export function pick<R = unknown>(array: R[]): R;
export function shuffle<R = unknown>(arr: R[]): R[];
export function onCircle(radius?: number | null, out?: number[]): number[];
export function insideCircle(radius?: number | null, out?: number[]): number[];
export function onSphere(radius?: number, out?: number[]): number[];
export function insideSphere(radius?: number | null, out?: number[]): number[];
export function quaternion(out?: number[]): number[];
export function weighted(weights?: number[]): number;
export function weightedSet(set?: number[]): number | null;
export function weightedSetIndex(set?: number[]): number;
export function gaussian(mean?: number | null, standardDerivation?: number | null): number;
export declare function createRandom(defaultSeed: string | number): {
    value: typeof value;
    createRandom: typeof createRandom;
    setSeed: typeof setSeed;
    getSeed: typeof getSeed;
    getRandomSeed: typeof getRandomSeed;
    valueNonZero: typeof valueNonZero;
    permuteNoise: typeof permuteNoise;
    noise1D: typeof noise1D;
    noise2D: typeof noise2D;
    noise3D: typeof noise3D;
    noise4D: typeof noise4D;
    sign: typeof sign;
    boolean: typeof boolean;
    chance: typeof chance;
    range: typeof range;
    rangeFloor: typeof rangeFloor;
    pick: typeof pick;
    shuffle: typeof shuffle;
    onCircle: typeof onCircle;
    insideCircle: typeof insideCircle;
    onSphere: typeof onSphere;
    insideSphere: typeof insideSphere;
    quaternion: typeof quaternion;
    weighted: typeof weighted;
    weightedSet: typeof weightedSet;
    weightedSetIndex: typeof weightedSetIndex;
    gaussian: typeof gaussian;
};
