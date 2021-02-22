import { StrategyType } from "../strategy-type.enum"
import { PermanentRedirectStrategy, PermanentRedirectStrategyData } from "../strategy.type"
import { ChainableStrategy } from "./chainable-strategy.abstract"

export class ChainablePermanentRedirectStrategy extends ChainableStrategy {
  protected readonly type = StrategyType.PERMANENT_REDIRECT

  constructor(protected data: PermanentRedirectStrategyData) {
    super()
  }

  serialize(): PermanentRedirectStrategy {
    return {
      type: this.type,
      data: this.data,
    }
  }
}
