import { StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export class ChainableRenderStrategy extends ChainableStrategy {
  type = StrategyType.RENDER;

  constructor(data) {
    super();
    this.data = data;
  }

  serialize() {
    return {
      type: this.type,
      data: this.data
    };
  }

}