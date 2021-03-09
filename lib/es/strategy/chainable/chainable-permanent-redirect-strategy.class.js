import { StrategyType } from "../strategy.type";
import { ChainableStrategy } from "./chainable-strategy.abstract";
export class ChainablePermanentRedirectStrategy extends ChainableStrategy {
  type = StrategyType.PERMANENT_REDIRECT;

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