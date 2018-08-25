module.exports = function () {

    process.env.NODE_ENV = 'test'

    return {
        name: 'NAP',

        files: [
            'classes/**/*.js',
            'models/**/*.js',
            'routes/**/*.js',
            'lib/**/*.js',
            'config/**/*', // also need JSON config settings
            // 'server.js'
        ],

        tests: [
            'test/*.js'
        ],

        env: {
            type: 'node',
            // params: {
            //   env: 'NODE_ENV=devbot'
            // }
        },
        debug: true,
        testFramework: 'mocha'

    }
}