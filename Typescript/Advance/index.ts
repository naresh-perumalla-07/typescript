

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
fruits.push(100);     // ❌ Error


//pop

fruits.pop();
console.log(fruits);

//map

let nums: number[] = [1, 2, 3];
let squares: number[] = nums.map(num => num * num);
console.log(squares); // [1, 4, 9]


//filter

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
