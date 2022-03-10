import * as Log from './test/utils/coolLogs'
//import * as CoolReport from './test/utils/coolReport'
const CoolReport = require('./test/utils/coolReport') 
export const config: WebdriverIO.Config = {

    // =====================
    // ts-node Configurations
    // =====================
    // 
    // You can write tests using TypeScript to get autocompletion and type safety.
    // You will need typescript and ts-node installed as devDependencies. 
    // WebdriverIO will automatically detect if these dependencies are installed 
    // and will compile your config and tests for you. 
    // If you need to configure how ts-node runs please use the
    // environment variables for ts-node or use wdio config's autoCompileOpts section.
    //
    
    autoCompileOpts: {
        autoCompile: true,
        // see https://github.com/TypeStrong/ts-node#cli-and-programmatic-options
        // for all available options
        tsNodeOpts: {
            transpileOnly: true,
            project: './tsconfig.json'
        }
        // tsconfig-paths is only used if "tsConfigPathsOpts" are provided, if you
        // do please make sure "tsconfig-paths" is installed as dependency
        //tsConfigPathsOpts: {
        //    baseUrl: './'
        //}
    },
    
    specs: [
        './test/specs/**/*.ts'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    maxInstances: 10,
    
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    
    logLevel: 'error',
    
    bail: 0,
    
    baseUrl: 'http://localhost',
    
    waitforTimeout: 10000,
    
    connectionRetryTimeout: 120000,
    
    connectionRetryCount: 3,
    
    services: ['chromedriver'],
    
    framework: 'mocha',
    
    reporters: [
        [CoolReport, {}]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    // =====
    // Hooks
    // =====

    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     * @param {String} cid worker id (e.g. 0-0)
     */
    beforeSession: function (config, capabilities, specs, cid) {
        Log.title('Starting testing session')
    },
    
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    afterSession: function (config, capabilities, specs) {
        Log.title('Completing testing session')
    },
    
}
