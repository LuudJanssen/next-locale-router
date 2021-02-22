import { StrategyType } from "../strategy-type.enum"
import { RenderStrategy, RenderStrategyData } from "../strategy.type"
import { ChainableStrategy } from "./chainable-strategy.abstract"

export class ChainableRenderStrategy extends ChainableStrategy {
  protected readonly type = StrategyType.RENDER

  constructor(protected data: RenderStrategyData) {
    super()
  }

  serialize(): RenderStrategy {
    return {
      type: this.type,
      data: this.data,
    }
  }
}
