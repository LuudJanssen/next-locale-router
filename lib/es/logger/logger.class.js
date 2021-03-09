import chalk from "chalk";
export class Logger {
  constructor(prefix = "[next-i18n-router] \t") {
    this.prefix = prefix;
  }

  log(message, ...optionalParams) {
    console.log(chalk.cyan(this.prefix), message, ...optionalParams);
    return this.createLogline("log");
  }

  debug(message, ...optionalParams) {
    const params = [message, ...optionalParams].map(param => {
      if (typeof param === "string") {
        return chalk.grey(param);
      }

      return param;
    });
    console.debug(chalk.grey(`${this.prefix}`), ...params);
    return this.createLogline("debug");
  }

  warn(message, ...optionalParams) {
    console.warn(chalk.yellow(this.prefix), message, ...optionalParams);
    return this.createLogline("warn");
  }

  error(message, ...optionalParams) {
    const [firstSegment, ...otherSegments] = message instanceof Error ? [message.name, message.message] : [message, ...optionalParams];
    console.error(chalk.red(this.prefix), firstSegment, ...otherSegments);
    return this.createLogline("error");
  }

  createLogline(level) {
    const [firstPrefixSegment, ...otherPrefixSegments] = this.prefix.split("\t");
    const newFirstPrefixSegment = "".padStart(firstPrefixSegment.length);
    const newPrefix = [newFirstPrefixSegment, ...otherPrefixSegments].join("\t");
    const logger = new Logger(newPrefix);
    const add = logger[level].bind(logger);
    return {
      level,
      add
    };
  }

}