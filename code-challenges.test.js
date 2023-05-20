// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code: 
        
        // Going to creat function named multBy3
        // function takes in one array 
        //using .map going to iterate over given array at given time

// a) Create a test with expect statements for each of the variables provided.

describe("multBy3", () => {
  it("returns an array with all the numbers multiplied by 3.", () => {
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
    expect(multBy3(numbersArray1 )).toEqual([18, 21, 24, 27, 30])
    expect(multBy3(numbersArray2 )).toEqual([72, 81, 90, 99, 108])

  })
})
        //Problem Example first test -  ReferenceError: multBy3 is not defined
        //Problem Example passed second test

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

const multBy3 = (array) => {
    return array.map(value => value * 3)
}


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("objDivBy3", () => {
    it("decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
      expect(objDivBy3(object1)).toEqual("15 is divisible by three")
      expect(objDivBy3(object2)).toEqual("0 is divisible by three")
      expect(objDivBy3(object3)).toEqual("-7 is not divisible by three")
    
    })
  })
        //Problem 1 fist test -  ReferenceError: objDivBy3 is not defined
        //Problem 1 passed second test

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
        
        // Pseudo code:
                
                 // Going to creat a function named objDivBy3 and will take an object as an argument 
                // Going to write if statement to check if given number is divisible by 3 
                 //Going to use string interpolation to keep the function dynamic with given value

const objDivBy3 = (obj) => {
    if (obj.number % 3 == 0){
        return `${obj.number} is divisible by three`
    } else if (obj.number % 3 !== 0) {
        return`${obj.number} is not divisible by three`
    }
}


    
  

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe("capsOnAll", () => {
    it("returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(capsOnAll(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capsOnAll(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
     })
  })
            //Problem 2 fist test - ReferenceError: capsOnAll is not defined
            //Problem 2 passed second test 

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

        // Pseudo code:
                // Create a function called capsOnAll that takes in an array as an argument
                //Going to use .map() to iterate over array
                //Going to make two variable, one to separate first letter from rest of the word, by using charAt(0) to target first letter, then .toUpperCase()to get capital letter
                //Going to slice the word from second character to the rest of the word by using .splice, and lower casing the rest by using .toLowerCase
                // going to return both variables by adding them together
        

               
const capsOnAll = (arr) => {
    return arr.map(value => {
 let firstLetter = value.charAt(0).toUpperCase()
 let restWord = value.slice(1).toLowerCase()
    return firstLetter + restWord
})
}
     


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
      expect(firstVowel(vowelTester1)).toEqual(1)
       expect(firstVowel(vowelTester2)).toEqual(0)
       expect(firstVowel(vowelTester3)).toEqual(2)
     })
  })
            //Problem 3 first test - ReferenceError: firstVowel is not defined
            //Problem 3 


const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

const firstVowel = (str) => {
    return str.indexOf(str[1])

}


// Pseudo code:


