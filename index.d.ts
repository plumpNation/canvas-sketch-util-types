import { boolean, chance, createRandom, gaussian, getRandomSeed, getSeed, insideCircle, insideSphere, noise1D, noise2D, noise3D, noise4D, onCircle, onSphere, permuteNoise, pick, quaternion, range, rangeFloor, setSeed, shuffle, sign, value, valueNonZero, weighted, weightedSet, weightedSetIndex } from "./random";

export const random: {
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

export const math: {
    mod: (a: any, b: any) => number;
    fract: (n: any) => number;
    sign: (n: any) => 0 | 1 | -1;
    degToRad: (n: any) => number;
    radToDeg: (n: any) => number;
    wrap: typeof import(".pnpm/canvas-sketch-util@1.10.0/node_modules/canvas-sketch-util/lib/wrap");
    pingPong: (t: any, length: any) => number;
    linspace: (n: any, opts: any) => number[];
    lerp: (min: any, max: any, t: any) => number;
    lerpArray: (min: any, max: any, t: any, out: any) => any;
    inverseLerp: (min: any, max: any, t: any) => number;
    lerpFrames: (values: any, t: any, out: any) => any;
    clamp: (value: any, min: any, max: any) => any;
    clamp01: (v: any) => any;
    smoothstep: (min: any, max: any, t: any) => number;
    damp: (a: any, b: any, lambda: any, dt: any) => number;
    dampArray: (a: any, b: any, lambda: any, dt: any, out: any) => any;
    mapRange: (value: any, inputMin: any, inputMax: any, outputMin: any, outputMax: any, clamp: any) => any;
    expand2D: (p: any, defaultValue: any) => any[];
    expand3D: (p: any, defaultValue: any) => any[];
    expand4D: (p: any, defaultValue: any) => any[];
};
export const penplot: typeof import("./penplot");
export const geometry: typeof import("./geometry");
export const shader: typeof import("./shader");
export const color: typeof import("./color");
