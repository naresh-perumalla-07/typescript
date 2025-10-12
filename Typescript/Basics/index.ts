

//Basic data types

// 1. string
let username: string = "Jonas";
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
// The any type disables all type checking for that variable.
// It basically tells TypeScript:bgdhhhhddggdfbbf

// “Trust me, I know what I’m doing — don’t check this!”

// 4. any
let data: any = 10;
data = "Jonas";
data = true;
let value: any = "Hello";
// value.toFixed(2); // Runtime error example


// The unknown type means:

// “I don’t know what this is yet — check before using it.”

// It’s safer than any because TypeScript forces you to verify the type before using it.

// 5. unknown
let input: unknown;
input = 10;
input = "Martha";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}


// | Feature               | `any`                            | `unknown`                                 |
// | --------------------- | -------------------------------- | ----------------------------------------- |
// | Type Safety           | ❌ No type safety                 | ✅ Type-safe                               |
// | Assign to other types | ✅ Allowed freely                 | ❌ Must check type before assigning        |
// | Compile-time check    | ❌ Skipped                        | ✅ Checked                                 |
// | When to use           | When you *don’t care* about type | When you *don’t know yet* what type it is |



let a: any = "Naresh";
let u: unknown = "Naresh";

let str1: string = a; // ✅ works (no check)
let str2: string = u; // ❌ Error — must verify type


// 6. void
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}
greet("Jonas");

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


const person:{
  name:string,
  age:number,
  city:string,
  teen:boolean,
  skills:string[],
  gadgets:[string,number]
  
}={
  name:"Jonassss",
  age:12,
  city:"Weiden",
  teen:true,
  gadgets:["Laptop",1221],
  skills:["Java","JavaScript","Typescript","ReactJs","NodeJs","NextJs"]
}





//Unions

let val: string | number;
val = "Hello";
val = 100; // ✅ both allowed



//type Alias

type UserID = string | number;
let id: UserID = 101;




