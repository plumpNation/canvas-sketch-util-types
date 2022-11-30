export = createShader;
declare function createShader(opt: any): {
    render: (props: any) => void;
    regl: createRegl.Regl;
    drawQuad: (props: any) => void;
    unload: () => void;
};
import createRegl = require("regl");
