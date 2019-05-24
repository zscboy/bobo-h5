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
export class Logger {
    private static level: LogLevel = LogLevel.ALL;
    // 去除tslint错误
    protected dummy: number;

    public static setFilterLevel(filterLevel: LogLevel): void {
        this.level = filterLevel;
    }

    public static trace(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        if (this.level >= LogLevel.TRACE) {
            this.log(msg, ...args);
        }
    }

    public static debug(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        if (this.level >= LogLevel.DEBUG) {
            this.log(msg, ...args);
        }
    }

    public static warn(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        if (this.level >= LogLevel.WARN) {
            this.log(msg, ...args);
        }
    }

    public static error(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        if (this.level >= LogLevel.ERROR) {
            this.log(msg, ...args);
        }
    }

    public static fatal(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        if (this.level >= LogLevel.FATAL) {
            this.log(msg, ...args);
        }
    }

    private static log(msg: any, ...args: any[]): void { // tslint:disable-line:no-any
        cc.log(msg, ...args);
    }
}
