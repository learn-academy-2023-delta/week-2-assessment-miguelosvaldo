// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Delta 2023"
console.log(cohort.split(""))

// a) Your answer: According to my notes, i will receive an array with individual string elements of each letter.
// b) Verify and explain:[ D,e,l,t,a, ,2,0,2,3 ] .split() takes a string and turns into an array, with string of individual elements.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: I received undefined, I believe that happened because i did not add a return to the function.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:[8,10,12,14,16]
// b) Verify and explain: I received [8,10,12,14,16], and I believe that happened beacuse, with .map() the array was iterated through individually. Selecting each number passing it through the number value and multiplying by 2.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:[11,13,15]
// b) Verify and explain: I received [11,13,15] because .filter() will filter out the odd numbers, by having the modulo 2 !== 0 to select every number that is not even.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:Javascript
// b) Verify and explain: When we console.log(), we call on Object myCodingSkills. Then by using dot notation, we call on languages, then by using bracket notation we call on Javascript who's index is 0.

// --------------------STRETCH: What will this log?

class Learn {                     
  constructor(name) {
    this.student = name
    this.cohort = "Delta"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Delta"
//     this.year = 2023
//   }
// }
// b) Verify and explain: It logged -> Learn { student: 'George', cohort: 'Delta', year: 2023 }. I believe it passed the string "George" into the name, since it was a value with no designation.
