let oneLet = "+ This phrase with let + ";
var twoVar = "+ This phrase with var + ";
const threeConst = "+ This phrase with const + ";

let twoConcat = oneLet + twoVar;
var threeConcat = oneLet + twoVar;
const fourConcat = oneLet + threeConst;

console.log(twoConcat);
console.log(threeConcat);
console.log(fourConcat);

console.log(`This is interpolation ${oneLet} with ${twoConcat} and ${threeConcat}`);