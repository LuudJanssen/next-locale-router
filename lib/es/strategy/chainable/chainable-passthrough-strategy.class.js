import { StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export class ChainablePassThroughStrategy extends ChainableStrategy {
  type = StrategyType.PASSTHROUGH;

  serialize() {
    return {
      type: this.type
    };
  }

}