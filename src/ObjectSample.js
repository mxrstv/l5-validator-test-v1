import Validator from './Validator.js';

const v = new Validator();

// console.log(JSON.stringify(v));
const schema = v.object().shape({
  id: v.number().odd(),
  basket: v.array().length(3),
});
// console.log(JSON.stringify(v.object()));
console.log(schema.schema));
