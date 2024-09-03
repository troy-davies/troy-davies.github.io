// Generate a large array
const largeArray = new Array(1000000).fill(0).map((_, index) => index);

// Function to process the array
const processArray = (arr) => {
    return arr.map(num => num * 2).filter(num => num % 3 === 0);
};

// Call the function
const result = processArray(largeArray);
console.log(result);

// Create a large object
const largeObject = {};
for (let i = 0; i < 10000; i++) {
    largeObject[`key${i}`] = `value${i}`;
}

// Function to iterate over the large object
const iterateLargeObject = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
};

// Call the function to iterate over the large object
iterateLargeObject(largeObject);

// Create a large array of objects
const largeArrayOfObjects = new Array(10000).fill(0).map((_, index) => ({
    id: index,
    name: `Item ${index}`,
    value: Math.random() * 100
}));

// Function to process the array of objects
const processArrayOfObjects = (arr) => {
    return arr.filter(item => item.value > 50).map(item => item.name);
};

// More complex calculations
const complexCalculation = (n) => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    return result;
};

// Generate a large string
let largeString = '';
for (let i = 0; i < 100000; i++) {
    largeString += `This is a large string number ${i}. `;
}

// Log the large string length
console.log(`Length of large string: ${largeString.length}`);

// Create a large 2D array
const large2DArray = new Array(1000).fill(0).map(() => new Array(1000).fill(0).map((_, index) => index));

// Function to sum all elements in the 2D array
const sum2DArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum;
};

// Call the function to sum the 2D array
const totalSum = sum2DArray(large2DArray);
console.log(`Total sum of 2D array: ${totalSum}`);

// Handle button click
document.getElementById('calculateButton').addEventListener('click', () => {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    if (!isNaN(inputNumber)) {
        const complexResult = complexCalculation(inputNumber);
        const processedNames = processArrayOfObjects(largeArrayOfObjects);
        const output = `Complex Calculation Result: ${complexResult}\n\nProcessed Names (value > 50): ${processedNames.join(', ')}`;
        document.getElementById('results').textContent = output;
    } else {
        document.getElementById('results').textContent = 'Please enter a valid number.';
    }
});
