// Generate a large array
const largeArray = new Array(1000000).fill(0).map((_, index) => index);

// Function to process the array
function processArray(arr) {
    return arr.map(num => num * 2).filter(num => num % 3 === 0);
}

// Call the function
const result = processArray(largeArray);
console.log(result);

// Additional code to increase file size
for (let i = 0; i < 10000; i++) {
    console.log(`This is line number ${i}`);
}

// More dummy functions to increase size
function dummyFunction1() {
    return "This is a dummy function.";
}

function dummyFunction2() {
    return "This is another dummy function.";
}

// Call dummy functions
dummyFunction1();
dummyFunction2();

// Create a large object
const largeObject = {};
for (let i = 0; i < 10000; i++) {
    largeObject[`key${i}`] = `value${i}`;
}

// Function to iterate over the large object
function iterateLargeObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

// Call the function to iterate over the large object
iterateLargeObject(largeObject);

// Create a large array of objects
const largeArrayOfObjects = new Array(10000).fill(0).map((_, index) => ({
    id: index,
    name: `Item ${index}`,
    value: Math.random() * 100
}));

// Function to process the array of objects
function processArrayOfObjects(arr) {
    return arr.filter(item => item.value > 50).map(item => item.name);
}

// Call the function
const processedNames = processArrayOfObjects(largeArrayOfObjects);
console.log(processedNames);

// More complex calculations
function complexCalculation(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
}

// Call the complex calculation function
const complexResult = complexCalculation(10000);
console.log(complexResult);

// Generate a large string
let largeString = '';
for (let i = 0; i < 100000; i++) {
    largeString += `This is a large string number ${i}. `;
}

// Log the large string length
console.log(`Length of large string: ${largeString.length}`);

// More dummy functions to increase size
function dummyFunction3() {
    return "This is a third dummy function.";
}

function dummyFunction4() {
    return "This is a fourth dummy function.";
}

// Call more dummy functions
dummyFunction3();
dummyFunction4();
