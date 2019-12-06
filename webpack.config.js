const root = require('app-root-path').path;
module.exports = {
    entry:`./index.js`,
    target: "node",
    externals:
        [/^[a-z\0-9]+$/  //Ignore node modules folder
        ],
    output: {
        filename: "index.js",
        path: `${root}/dist`
    }
};