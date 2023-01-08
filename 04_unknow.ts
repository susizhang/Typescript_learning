let foo: unknown = "aaa";
foo = 123;

// console.log(foo.length); // error

if (typeof foo === "string") {
  console.log(foo.length);
}

// Should verify type of unknown at first
