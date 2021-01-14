export class Logger {
    info (...arg) {
        // can replace with any logger package
        console.log(...arg)
    }

    error (...arg) {
        console.error(...arg)
    }
}