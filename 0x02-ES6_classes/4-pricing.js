/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/extensions
import Currency from './3-currency.js';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    } else {
      this._amount = amount;
      this._currency = currency;
    }
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
