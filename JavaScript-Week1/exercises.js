
console.log("===== WEEK 1: JAVASCRIPT BASICS =====");

// Exercise 1: Sum of array
console.log("\nExercise 1: Sum of Array");

function sumArray(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log("Sum:", sumArray([2, 4, 6, 8]));


// Exercise 2: Find largest number
console.log("\nExercise 2: Largest Number");

function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

console.log("Largest:", findLargest([12, 5, 27, 9]));


// Exercise 3: Filter even numbers
console.log("\nExercise 3: Even Numbers");

function getEvenNumbers(numbers) {
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

console.log("Even numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6]));


// Exercise 4: Remove duplicates
console.log("\nExercise 4: Remove Duplicates");

function removeDuplicates(items) {
    return [...new Set(items)];
}

console.log("Unique values:", removeDuplicates([1, 2, 2, 3, 4, 4]));


// Exercise 5: Count words
console.log("\nExercise 5: Count Words");

function countWords(sentence) {
    if (sentence.trim() === "") {
        return 0;
    }

    return sentence.trim().split(/\s+/).length;
}

console.log("Word count:", countWords("JavaScript is fun to learn"));


// Exercise 6: Student object
console.log("\nExercise 6: Student Object");

const student = {
    name: "Yashasvi",
    course: "B.Tech CSE",
    semester: 7
};

function displayStudent(person) {
    console.log("Name:", person.name);
    console.log("Course:", person.course);
    console.log("Semester:", person.semester);
}

displayStudent(student);


// Exercise 7: Get object values
console.log("\nExercise 7: Object Values");

function getObjectValues(object) {
    return Object.values(object);
}

console.log("Values:", getObjectValues({
    subject: "JavaScript",
    level: "Beginner",
    completed: true
}));


// Exercise 8: Factorial
console.log("\nExercise 8: Factorial");

function factorial(number) {
    if (!Number.isInteger(number) || number < 0) {
        return "Enter a non-negative integer";
    }

    let result = 1;

    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log("Factorial of 5:", factorial(5));


// Exercise 9: Capitalize words
console.log("\nExercise 9: Capitalize Words");

function capitalizeWords(sentence) {
    return sentence
        .trim()
        .split(/\s+/)
        .map(function(word) {
            return word.charAt(0).toUpperCase()
                + word.slice(1).toLowerCase();
        })
        .join(" ");
}

console.log(
    "Capitalized:",
    capitalizeWords("learn javascript step by step")
);


// Exercise 10: DOM manipulation
// Is exercise ko index.html mein browser par test karna hai.
console.log("\nExercise 10: DOM Manipulation");
console.log("Open index.html in your browser to test the DOM exercise.");

console.log("\n===== ALL 10 EXERCISES LISTED =====");
