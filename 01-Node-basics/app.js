const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];
const correctItems = _.flattenDeep(items);
console.log(correctItems);