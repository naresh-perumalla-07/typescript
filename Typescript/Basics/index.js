//Basic data types
// 1. string
var username = "Naresh";
var city = "Hyderabad";
var greeting = "Hello, ".concat(username, "!");
// 2. number
var age = 22;
var pi = 3.14;
var total = age * 2;
// 3. boolean
var isAdmin = true;
var isLoggedIn = false;
if (isLoggedIn) {
    console.log("Welcome!");
}
else {
    console.log("Please login");
}
// 4. any
var data = 10;
data = "Naresh";
data = true;
var value = "Hello";
// value.toFixed(2); // Runtime error example
// 5. unknown
var input;
input = 10;
input = "Naresh";
if (typeof input === "string") {
    console.log(input.toUpperCase());
}
// 6. void
function greet(name) {
    console.log("Hello, ".concat(name));
}
greet("Naresh");
// 7. null and undefined
var user = null;
var score = undefined;
var name = null;
// 8. never
function throwError(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) { }
}
var person = {
    name: "Jonassss",
    age: 12,
    city: "Weiden",
    teen: true,
    gadgets: ["Laptop", 1221],
    skills: ["Java", "JavaScript", "Typescript", "ReactJs", "NodeJs", "NextJs"]
};
console.log(person.skills[3]);
