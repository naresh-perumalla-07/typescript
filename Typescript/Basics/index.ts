

//Basic data types

// 1. string
let username: string = "Naresh";
let city: string = "Hyderabad";
let greeting: string = `Hello, ${username}!`;

// 2. number
let age: number = 22;
let pi: number = 3.14;
let total: number = age * 2;

// 3. boolean
let isAdmin: boolean = true;
let isLoggedIn: boolean = false;
if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please login");
}

// 4. any
let data: any = 10;
data = "Naresh";
data = true;
let value: any = "Hello";
// value.toFixed(2); // Runtime error example

// 5. unknown
let input: unknown;
input = 10;
input = "Naresh";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}

// 6. void
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
greet("Naresh");

// 7. null and undefined
let user: string | null = null;
let score: number | undefined = undefined;
let name: string | null = null;

// 8. never
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {}
}
