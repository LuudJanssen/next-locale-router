import { strategyLogger } from "../../logger";
export class ChainableStrategy {
  log(url) {
    strategyLogger.log(this.serialize(), url);
    return this;
  }

}