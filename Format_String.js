let number = 123456.789;

console.log(`United States: ${number.toLocaleString("en-US")}`);
console.log(`India: ${number.toLocaleString("hi-IN")}`);
console.log(`Germany: ${number.toLocaleString("de-DE")}`);
console.log(`United States: ${number.toLocaleString(undefined)}`);

console.log("------------------------");
//With Optional

console.log(`United States: ${number.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
console.log(`Indian: ${number.toLocaleString("hi-IN", {style: "currency", currency: "INR"})}`);
console.log(`Germany: ${number.toLocaleString("de-DE", {style: "currency", currency: "EUR"})}`);