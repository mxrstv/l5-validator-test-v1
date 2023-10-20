export default class ArraySchema {
  constructor(validators) {
    this.validators = [...validators];
  }

  isValid(value) {
    return this.validators.every((validator) => validator(value) === true);
  }

  length(len) {
    const validator = (value) => value.length === len;
    return new ArraySchema([...this.validators, validator]);
  }
}
