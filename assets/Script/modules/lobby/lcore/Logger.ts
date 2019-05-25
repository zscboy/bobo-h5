/**
 * 日志打印，主要是增加一层过滤开关
 */
enum LogLevel {
    TRACE,
    DEBUG,
    WARN,
    ERROR,
    FATAL,
    ALL
}

/**
 * 日志记录
 */
export namespace Logger {
    export let level: LogLevel = LogLevel.ALL;

    export const setFilterLevel = (filterLevel: LogLevel): void => {
        level = filterLevel;
    };

    const log = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        cc.log(msg, ...args);
    };

    export const trace = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        if (level >= LogLevel.TRACE) {
            log(msg, ...args);
        }
    };

    export const debug = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        if (level >= LogLevel.DEBUG) {
            log(msg, ...args);
        }
    };

    export const warn = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        if (level >= LogLevel.WARN) {
            log(msg, ...args);
        }
    };

    export const error = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        if (level >= LogLevel.ERROR) {
            log(msg, ...args);
        }
    };

    export const fatal = (msg: any, ...args: any[]): void => { // tslint:disable-line:no-any
        if (level >= LogLevel.FATAL) {
            log(msg, ...args);
        }
    };
}
