// JSON Stringify

const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const person = {"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["JellyFishing", "Karate", "Cooking"]};
const people = [{"name": "Spongebob", "age": 30, "isEmployed": true}, {"name": "Patrick", "age": 34, "isEmployed": false}, {"name": "Squidward", "age": 50, "isEmployed": true}, {"name": "Sandy", "age": 34, "isEmployed": false}];

const jsonString = JSON.stringify(people);

console.log(jsonString);

// JSON Parse

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["JellyFishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true}, {"name": "Patrick", "age": 34, "isEmployed": false}, {"name": "Squidward", "age": 50, "isEmployed": true}, {"name": "Sandy", "age": 34, "isEmployed": false}]`;

const parsedData = JSON.parse(jsonPeople);

console.log(parsedData);

// JSON Fetch - Code is Right but it is showing Error

fetch("People.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value)))
    .catch(error => console.error(error))