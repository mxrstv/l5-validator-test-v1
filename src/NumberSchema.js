/* eslint-disable no-unused-vars */
export default class NumberSchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  even() {
    const validator = (value) => value % 2 === 0;
    return new NumberSchema([...this.validators, validator]);
  }

  odd() {
    const validator = (value) => value % 2 !== 0;
    return new NumberSchema([...this.validators, validator]);
  }

  range(min, max) {
    const validator = (value) => value >= min && value <= max;
    return new NumberSchema([...this.validators, validator]);
  }

  prime() {
    const validator = (value) => {
      let result = true;
      if (value <= 0) {
        return false;
      }
      if (value === 1) {
        return result;
      }
      for (let i = 2; i < value; i += 1) {
        if (value % i === 0) {
          result = false;
          break;
        }
      }
      return result;
    };
    return new NumberSchema([...this.validators, validator]);
  }
}
