import { ILogger } from "./logger.interface";
declare type LogLevel = "log" | "debug" | "warn" | "error";
interface LogLine {
    level: LogLevel;
    add: {
        (...data: any[]): void;
        (message?: any, ...optionalParams: any[]): void;
    };
}
export declare class Logger implements ILogger {
    private prefix;
    constructor(prefix?: string);
    log(...data: any[]): LogLine;
    log(message?: any, ...optionalParams: any[]): LogLine;
    debug(...data: any[]): LogLine;
    debug(message?: any, ...optionalParams: any[]): LogLine;
    warn(...data: any[]): LogLine;
    warn(message?: any, ...optionalParams: any[]): LogLine;
    error(error: Error): LogLine;
    error(...data: any[]): LogLine;
    error(message?: any, ...optionalParams: any[]): LogLine;
    private createLogline;
}
export {};
