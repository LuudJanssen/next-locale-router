import { StrategyType } from "../strategy-type.enum"
import { PassThroughStrategy } from "../strategy.type"
import { ChainableStrategy } from "./chainable-strategy.abstract"

export class ChainablePassThroughStrategy extends ChainableStrategy {
  protected readonly type = StrategyType.PASSTHROUGH

  serialize(): PassThroughStrategy {
    return {
      type: this.type,
    }
  }
}
