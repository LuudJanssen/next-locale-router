import { ILogger } from "./logger.interface"

export class Logger implements ILogger {
  private prefix = "-- next-i18n-router --\t"

  log(...data: any[]): void
  log(message?: any, ...optionalParams: any[]): void
  log(message?: any, ...optionalParams: any[]) {
    return console.log(`${this.prefix}${message}`, ...optionalParams)
  }

  debug(...data: any[]): void
  debug(message?: any, ...optionalParams: any[]): void
  debug(message?: any, ...optionalParams: any[]) {
    return console.debug(`${this.prefix}${message}`, ...optionalParams)
  }

  warn(...data: any[]): void
  warn(message?: any, ...optionalParams: any[]): void
  warn(message?: any, ...optionalParams: any[]) {
    return console.warn(`${this.prefix}${message}`, ...optionalParams)
  }

  error(...data: any[]): void
  error(message?: any, ...optionalParams: any[]): void
  error(message?: any, ...optionalParams: any[]) {
    return console.error(`${this.prefix}${message}`, ...optionalParams)
  }
}
