export function value(): number;
export function setSeed(seed: string | number, opt: any): void;
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
export function chance(n: any): boolean;
export function range(min: number, max: number): number;
export function rangeFloor(min: number, max: number): number;
export function pick<R = unknown>(array: R[]): R;
export function shuffle<R = unknown>(arr: R[]): R[];
export function onCircle(radius: number, out: any): any;
export function insideCircle(radius: number, out: any): any;
export function onSphere(radius: number, out: any): any;
export function insideSphere(radius: number, out: any): any;
export function quaternion(out: any): any;
export function weighted(weights: any): number;
export function weightedSet(set: any): any;
export function weightedSetIndex(set: any): number;
export function gaussian(mean: any, standardDerivation: any): any;
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
