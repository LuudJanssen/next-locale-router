import chalk from "chalk"
import { ILogger } from "./logger.interface"

type LogLevel = "log" | "debug" | "warn" | "error"

interface LogLine {
  level: LogLevel
  add: {
    (...data: any[]): void
    (message?: any, ...optionalParams: any[]): void
  }
}

export class Logger implements ILogger {
  constructor(private prefix = "[next-i18n-router] \t") {}

  log(...data: any[]): LogLine
  log(message?: any, ...optionalParams: any[]): LogLine
  log(message?: any, ...optionalParams: any[]): LogLine {
    console.log(chalk.cyan(this.prefix), message, ...optionalParams)
    return this.createLogline("log")
  }

  debug(...data: any[]): LogLine
  debug(message?: any, ...optionalParams: any[]): LogLine
  debug(message?: any, ...optionalParams: any[]): LogLine {
    const params = [message, ...optionalParams].map((param) => {
      if (typeof param === "string") {
        return chalk.grey(param)
      }

      return param
    })

    console.debug(chalk.grey(`${this.prefix}`), ...params)
    return this.createLogline("debug")
  }

  warn(...data: any[]): LogLine
  warn(message?: any, ...optionalParams: any[]): LogLine
  warn(message?: any, ...optionalParams: any[]): LogLine {
    console.warn(chalk.yellow(this.prefix), message, ...optionalParams)
    return this.createLogline("warn")
  }

  error(error: Error): LogLine
  error(...data: any[]): LogLine
  error(message?: any, ...optionalParams: any[]): LogLine
  error(message?: any, ...optionalParams: any[]): LogLine {
    const [firstSegment, ...otherSegments] =
      message instanceof Error ? [message.name, message.message] : [message, ...optionalParams]

    console.error(chalk.red(this.prefix), firstSegment, ...otherSegments)
    return this.createLogline("error")
  }

  private createLogline(level: LogLevel) {
    const [firstPrefixSegment, ...otherPrefixSegments] = this.prefix.split("\t")
    const newFirstPrefixSegment = "".padStart(firstPrefixSegment.length)
    const newPrefix = [newFirstPrefixSegment, ...otherPrefixSegments].join("\t")

    const logger = new Logger(newPrefix)
    const add = logger[level].bind(logger)

    return {
      level,
      add,
    }
  }
}
