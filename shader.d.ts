import type {
    Regl,
    DefaultContext,
    DrawCommand,
    InitializationOptions,
} from 'regl';

export = createShader;

/**
 * Wrapper around 'regl'
 *
 * @see https://www.npmjs.com/package/regl
 */
declare function createShader(opt?: {
    gl?: InitializationOptions['gl'];
    extensions?: InitializationOptions['extensions'];
    optionalExtensions?: InitializationOptions['optionalExtensions'];
    profile?: InitializationOptions['profile'];
    onDone?: InitializationOptions['onDone'];
}): {
    render: (props: any) => void;
    regl: Regl;
    drawQuad: DrawCommand<DefaultContext, {}>;
    unload: () => void;
};
