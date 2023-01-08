// 01
// let firstName: string = "why";
// const age: number = 18;
// const height: number = 1.88;

// firstName = "Kobe";
// // firstName = 123;

// 02
// let name1 = "Kobe";
// let age2 = 18;
// const height2 = 1.88;

// 03

// let names: string[] = ["abc", "lky", "happy lily"];
// names.push("gogogo");

// // names.push(123);

// // let nums: Array<number> = [123, "abc", 698, 888,859];
// let nums: Array<number> = [123, 698, 888];

// 04
// let info3 = {
//   name: "Koby",
//   age: 18,
//   height: 1.88,
// };

let info3: {
  name: string;
  age: number;
  height: number;
} = {
  name: "Koby",
  age: 18,
  height: 1.88,
};

// 05
const getValue = (key: string): string | null => {
  return key;
};

let value = getValue("some key");

if (value === null) {
  console.log(null);
} else {
  console.log(value);
}
