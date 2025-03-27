let str1 = "Hello, ";
let str2 = "World!";
let str3 = "This is a test. Testing, test one, two, three.";
let str4 = "Mozilla";

console.log(`str1: "${str1}"`);
console.log(`str2: "${str2}"`);
console.log(`str3: "${str3}"`);
console.log(`str4: "${str4}"`);

// concat()
let concatentaed = str1.concat(str2);
console.log("str1.contact(str2): " + concatentaed)

// indexOf()
let result = str3.indexOf("Test");
console.log("str3.indexOf('Test'):", result);

// match()
console.log("str3.indexOf('test'):", str3.match(/test/g));

// matchAll()
let matchAllResult1 = Array.from(str3.matchAll("test"));
console.log("Array.from(str3.matchAll('test')):", matchAllResult1);