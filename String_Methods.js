let userName = "BroCode";
let phone = "123-456-789"

console.log(userName.charAt(0));    //Give the One Letter According to Index
console.log(userName.indexOf("o")); //Give the index no. of the Particular Character
console.log(userName.length);
console.log(userName.trim("    Vinayak      "));    //Removes the Unwanted White Spaces
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.repeat(3));    //Repeat the Same String 3 times
console.log(userName.startsWith(" "));  //Give the boolean value of the Starting Character
console.log(userName.endsWith(" "));    //Same as Start with
console.log(userName.includes(" "));    //Does the Username includes the Spaces in Between
console.log(phone.replaceAll("-", "/"));   //Replaces all the Specified Character
console.log(phone.padStart(20, "0"));   //Add 0 at start until the character is 20 same as pad end but at the end.