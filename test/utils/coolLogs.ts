import * as chalk from 'chalk'

const infoFormat = chalk.cyanBright.bold
const noteFormat = chalk.magentaBright.bold
const warningFormat = chalk.yellowBright.bold 
const successFormat = chalk.greenBright.bold
const failureFormat = chalk.bgRedBright.yellowBright.bold 
const titleFormat = chalk.bgBlue.whiteBright.bold
const stepFormat = chalk.gray.bold

/**
 * Returns a formatted timestamp for logging purposes.
 * @param {Boolean} niceFormat - Whether it would be on a nice format or not. Defaults to `true`
 * @returns {String} - A formatted timestamp
 */
 const coolTimestamp = (niceFormat = true) => {
    const date = new Date()
    const dateToReturn = niceFormat
        ?   `${date.getFullYear()}-` + 
            `${date.getMonth() + 1}`.padStart(2, '0') + '-' +
            `${date.getDate()}`.padStart(2, '0') + ' ' +
            `${date.getHours()}`.padStart(2, '0') + ':' + 
            `${date.getMinutes()}`.padStart(2, '0') + ':' +
            `${date.getSeconds()}`.padStart(2, '0')
        :   `${date.getFullYear()}` + 
            `${date.getMonth() + 1}`.padStart(2, '0') + 
            `${date.getDate()}`.padStart(2, '0') + '-' +
            `${date.getHours()}`.padStart(2, '0') + 
            `${date.getMinutes()}`.padStart(2, '0') +
            `${date.getSeconds()}`.padStart(2, '0')
    return dateToReturn
}

/**
 * An information message will be logged.
 * @param {String} msg - The message to log 
 */
 const info = (msg) => {
    console.log(`${coolTimestamp()} ${infoFormat(`${'INFO'.padEnd(5)} ${msg}`)}`)
}

/**
 * A warning message will be logged.
 * @param {String} msg - The message to log 
 */
 const warning = (msg) => {
    console.log(`${coolTimestamp()} ${warningFormat(`${'WARN'.padEnd(5)} ${msg}`)}`)
}

/**
 * A failure message will be logged.
 * @param {String} msg - The message to log 
 */
const failure = (msg) => {
    console.log(`${coolTimestamp()} ${failureFormat(`${'ERROR'.padEnd(5)} ${msg}`)}`)
}

/**
 * A success message will be logged.
 * @param {String} msg - The message to log 
 */
 const success = (msg) => {
    console.log(`${coolTimestamp()} ${successFormat(`${'YES!'.padEnd(5)} ${msg}`)}`)
}

/**
 * An "important note" message will be logged.
 * @param {String} msg - The message to log 
 */
const note = (msg) => {
    console.log(`${coolTimestamp()} ${noteFormat(`${'NOTE'.padEnd(5)} ${msg}`)}`)
}

/**
 * A "header" message will be logged.
 * @param {String} msg - The message to log 
 */
 const title = (msg) => {
    console.log(`${coolTimestamp()} ${titleFormat(`${'TITLE'.padEnd(5)} ${msg}`)}`)
}

/**
 * A "step" message will be logged.
 * @param {String} msg - The message to log 
 */
const step = (msg) => {
    console.log(`${coolTimestamp()} ${stepFormat(`${'STEP'.padEnd(5)} ${msg}`)}`)
}

export { 
    coolTimestamp,
    info,
    warning,
    failure,
    success,
    note,
    title,
    step,
}

 