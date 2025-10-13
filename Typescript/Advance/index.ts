

//Arrays

let arr:string[];
arr=["Jonas","Martha"]

let arr2:number[]=[1,2,3,2,3];

let marks: Array<number> = [90, 85, 76];
let studentss: Array<string> = ["Naresh", "Kiran"];


let fruits: string[] = ["Apple", "Banana", "Mango"];

interface Student {
  name: string;
  age: number;
}

let students: Student[] = [
  { name: "Naresh", age: 21 },
  { name: "Kiran", age: 22 },
];

//methods

let fruits: string[] = ["Apple", "Banana"];
fruits.push("Mango"); // ✅
fruits.push(100);     

//pop
fruits.pop();
console.log(fruits);

//map

let nums: number[] = [1, 2, 3];
let squares: number[] = nums.map(num => num * num);
console.log(squares); // [1, 4, 9]


//filterkbjkbnjknbm

let even: number[] = nums.filter(num => num % 2 === 0);
console.log(even); // [2]


//foreach

nums.forEach(n => console.log(n * 2)); // 2, 4, 6


//Union

let mixed: (string | number)[] = ["Naresh", 21, "Kiran", 22];


let colors = ["Red", "Green", "Blue"]; // inferred as string[]
colors.push("Yellow"); // ✅
colors.push(10);       // ❌ Error


function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

let num = getFirstElement([10, 20, 30]); // num: number
let str = getFirstElement(["Naresh", "Kiran"]); // str: string




//OBJECTS

let person2: { name: string; age: number };

person2 = {
  name: "Naresh",
  age: 22
};

let user2: { name: string; age?: number };

user2 = { name: "Jonas" }; // ✅ age is optional
user2 = { name: "Martha", age: 20 }; // ✅ also fine


let student: { readonly id: number; name: string } = {
  id: 101,
  name: "Naresh"
};

student.name = "Jonas"; // ✅ allowed
student.id = 200;       // ❌ Error: Cannot assign to 'id'



type Person = {
  name: string;
  age: number;
};

let p1: Person = { name: "Naresh", age: 22 };
let p2: Person = { name: "Martha", age: 21 };



type Address = {
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  address: Address;
};

let p1: Person = {
  name: "Naresh",
  age: 22,
  address: {
    city: "Hyderabad",
    country: "India"
  }
};

type Student = {
  name: string;
  roll: number;
};

let students: Student[] = [
  { name: "Jonas", roll: 1 },
  { name: "Martha", roll: 2 }
];


interface Product {
  id: number;
  title: string;
  price: number;
}

let item: Product = {
  id: 101,
  title: "Laptop",
  price: 55000
};



