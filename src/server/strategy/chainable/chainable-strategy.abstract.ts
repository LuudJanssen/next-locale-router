import { URL } from "url"
import { strategyLogger } from "../../logger"
import { Strategy, StrategyType } from "../strategy.type"

export abstract class ChainableStrategy {
  protected abstract readonly type: StrategyType

  log(url: URL): ChainableStrategy {
    strategyLogger.log(this.serialize(), url)
    return this
  }

  abstract serialize(): Strategy
}
