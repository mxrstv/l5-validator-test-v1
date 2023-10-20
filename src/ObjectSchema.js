export default class ObjectSchema {
  constructor(schema = {}) {
    this.validators = { ...this.validators, ...schema };
  }

  isValid(value) {
    // const validator = (value) => typeof value === 'object' && value !== null;
    // const validator = Object.prototype.toString.call(obj) === '[object Object]';
    // const validator = (value) => value instanceof Object;
    const keys = Object.keys(value);
    if (keys.length !== Object.keys(this.validators).length) {
      return false;
    }
    return keys.every((key) => this.validators[key].isValid(value[key]));
  }

  shape(rules) {
    return new ObjectSchema({ ...this.validators, ...rules });
  }
}
