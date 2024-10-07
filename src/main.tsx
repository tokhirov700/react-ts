// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// interface Global {
//   name : string,
//   age : number
// }

// interface Admin extends Global {
//    salary : number
// }
// interface User extends Global {
//   id : number
// }

// const admin : Admin = {
//   name : 'admin',
//   age : 18,
//   salary : 100
// }

// const user : User = {
//   name : 'user',
//   age : 18,
//   id : 1
// }

// console.log(admin, user)  


// interface Users {
//   name : string,
//   age : number,
//   id : number,
//   phone : string
// }

// const users : Users[] = [
//   {
//     name : 'admin',
//     age : 18,
//     id : 1,
//     phone : '123456789'
//   },
//   {
//     name : 'user',
//     age : 18,
//     id : 2,
//     phone : '123456789'
//   }
// ]

// console.log(users)


// const User3: Array <Users> = [
//   {
//     name : 'admin',
//     age : 18,
//     id : 1,
//     phone : '123456789'
//   },
//   {
//     name : 'user',
//     age : 18,
//     id : 2,
//     phone : '123456789'
//   }
// ]

// console.log(User3)

// interface Admins {
//   name : string,
//   age : number,
//   salary : number
//   IsAdmin : boolean
// }

// const Admins : Admins[] = [
//   {
//     name : 'admin',
//     age : 18,
//     salary : 100,
//     IsAdmin : true
//   },
//   {
//     name : 'user',
//     age : 18,
//     salary : 100,
//     IsAdmin : false
//   }
// ]

// console.log(Admins)


// interface Posts {
//   title : string,
//   body : string
// }

// const posts : Posts[] = [
//   {
//     title : 'title1',
//     body : 'body1'
//   },
//   {
//     title : 'title2',
//     body : 'body2'
//   }
// ]

// console.log(posts)


// interface peopls {
//   name : string,
//   age : number
// }

// const peopls : peopls[] = [
//   {
//     name : 'admin',
//     age : 18
//   },
//   {
//     name : 'user',
//     age : 18
//   }
// ] 

// console.log(peopls)



// interface courses {
//   title : string,
//   mark : number
// }

// const courses : courses[] = [
//   {
//     title : 'title1',
//     mark : 100
//   },
//   {
//     title : 'title2',
//     mark : 100
//   }
// ]

// console.log(courses)


// interface marks {
//   title : string,
//   mark : number
// }


// const marks : Array <marks> = [
//   {
//     title : 'title1',
//     mark : 100
//   },
//   {
//     title : 'title2',
//     mark : 100
//   }
// ]

// console.log(marks)



// interface Pupils {
//   name: string;
//   protcent: number;
// }

// const Pupils: Pupils[] = [
//   { name: 'Elbek', protcent: 95 },
//   { name: 'Zafar', protcent: 78 },
//   { name: 'Aziz', protcent: 83 },
//   { name: 'Jasur', protcent: 88 },
//   { name: 'Bobur', protcent: 66 },
//   { name: 'Nur', protcent: 75 }
// ];

// const passedUsers = Pupils.filter(pupil => pupil.protcent > 80);

// console.log("Imtihondan o'tgan foydalanuvchilar:", passedUsers);


// // interface MyObject {
// //   [key: string]: number;
// // }

// // const obj: MyObject = {
// //   a: 2,
// //   b: 5,
// //   c: 7
// // };

// // const result : string[] = Object.entries(obj).map(([key, value]) => `${key}${value}`);

// // console.log(result);


// interface Animals {
//   name : string,
// }
// const Animals : Animals[] = [
//   {
//     name : 'cat'
//   },
//   {
//     name : 'dog'
//   },
//   {
//     name : 'fish'
//   },
//   {
//     name : 'bird'
//   },
//   {
//     name : 'lizard'
//   },
//   {
//     name : 'snake'
//   }, {
//     name : 'cat'
//   },
//   {
//     name : 'dog'
//   },
//   {
//     name : 'bird'
//   },
//   {
//     name : 'dog'
//   },
// ]

// const count: { [key: string]: number } = {};


// for (const animal of Animals) {
//   count[animal.name] = (count[animal.name] || 0) + 1; 
// }

// const duplicates: { [key: string]: number } = {};
// for (const [name, number] of Object.entries(count)) {
//   if (number > 1) {
//     duplicates[name] = number;
//   }
// }

// console.log(duplicates);


// interface Words {
//   name: string;
// }

// const words: Words[] = [
//   {
//     name: 'hello world hello sarvar'
//   }
// ];

// const output = words.flatMap(word => word.name.split(' ').map(w => w.length));

// console.log(output);


// interface Gaps {
//   name: string;
// }

// const gaps: Gaps[] = [
//   {
//     name: 'hellowor ldhel losarvar',
//   },
// ];

// const hasSpaces = (gapsArray: Gaps[]): boolean => {
//   return gapsArray.some(gap => gap.name.split(' ').length > 1);
// };

// const result = hasSpaces(gaps);
// console.log(result); 


// 35 masala 

interface NumObject {
  [key: string]: number;
}

const multiplyValues = (obj: NumObject, n: number): NumObject => {
  const result: NumObject = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key] * n;
    }
  }
  return result;
};

const obj: NumObject = { a: 2, b: 3, c: 4 };
const n = 3;

const res = multiplyValues(obj, n);
console.log(res); 

// 36 masala 

const countNumbersInString = (str: string): number => {
  const numbers = str.match(/\d/g);
  return numbers ? numbers.length : 0;
};

const input = "Salom 2024-yilda, 3 ta  7 loyihada ishlayman";
const result = countNumbersInString(input);
console.log(result); 


// 37 masala

const sumAndSplit = (...numbers: number[]): number[] => {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return String(sum).split('').map(Number); 
};

const result2 = sumAndSplit(1, 22, 3); 
console.log(result2);


// 38 masala 

const countWordsWithA = (str: string): number => {
  const words = str.split(' '); 
  const wordsWithA = words.filter(word => word.toLowerCase().includes('a'));
  return wordsWithA.length;
};

const input2 = "Salom dunyo, qanday ishlar?";
const result3 = countWordsWithA(input2);
console.log(result3);


// 39 masala

const findPowerOfTwo = (s: number): number | null => {
  let k = 0;
  while (s > 1) {
    if (s % 2 !== 0) return null; 
    s /= 2;
    k++;
  }
  return k;
};

const s = 8;
const result4 = findPowerOfTwo(s);
console.log(result4); 

// 40 masala

interface NumberArray {
  arr: number[];
}

const findMiddleNumber = ({ arr }: NumberArray): number => {
  const length = arr.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
   
    return arr[middleIndex];
  } else {
  
    return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
  }
};

const array1: NumberArray = { arr: [1, 2, 3, 4, 5] };
const array2: NumberArray = { arr: [1, 2, 3, 4,5,6,7] };

console.log(findMiddleNumber(array1)); 
console.log(findMiddleNumber(array2)); 


// 41 masala

interface Book {
  title: string;
  author: string;
  read: boolean;
}

const books: Book[] = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    read: false,
  },
  {
    title: "Dunyoning ishlari",
    author: "O'tkir Hoshimov",
    read: true,
  },
  {
    title: "Iymon",
    author: "Shayx Muhammad Sodiq Muhammad Yusuf",
    read: true,
  },
];

const checkReadStatus = (books: Book[]): void => {
  books.forEach((book, index) => {
    const status = book.read ? "o'qilgan" : "o'qilmagan";
    console.log(
      `${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`
    );
  });
};

checkReadStatus(books);


// 42 masala

interface LengthObject {
  [key: string]: number; 
}

const createLengthObject = (arr: string[]): LengthObject => {
  const result: LengthObject = {};
  arr.forEach(item => {
    result[item] = item.length; 
  });
  return result;
};

const input5 = ["text", "world", "laptop"];
const output = createLengthObject(input5);
console.log(output); 


// 43 masala

interface NumberDictionary {
  [key: string]: number; 
}

const scaleValues = (inputObject: NumberDictionary, multiplier: number): NumberDictionary => {
  const scaledResult: NumberDictionary = {};
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      scaledResult[key] = inputObject[key] * multiplier; 
    }
  }
  return scaledResult;
};

const initialValues: NumberDictionary = { a: 2, b: 3, c: 4 };
const factor = 3;

const finalResult = scaleValues(initialValues, factor);
console.log(finalResult);

// 44 masala

interface PowerArray {
  [index: number]: number;
}

const generatePowersOfTwo = (n: number): PowerArray => {
  const powers: PowerArray = [];
  
  for (let i = 1; i <= n; i++) {
    powers.push(2 ** i); 
  }

  return powers;
};

const resultForFour: PowerArray = generatePowersOfTwo(4);
console.log(resultForFour); 

const resultForFive: PowerArray = generatePowersOfTwo(5);
console.log(resultForFive);

// 45 masala
interface CountObject {
  [key: string]: number; 
}

const countWords = (words: string[]): CountObject => {
  const wordCount: CountObject = {};
  
  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word] += 1; 
    } else {
      wordCount[word] = 1; 
    }
  }
  
  return wordCount;
};

const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const result6 = countWords(animals);
console.log(result6); 

// 46 masala

const squareArrayElements = (arr: number[]): number[] => {
  return arr.map(num => num ** 2); 
};

const inputArray = [1, 2, 3, 4, 5];
const outputArray = squareArrayElements(inputArray);
console.log(outputArray);


// 47 masala

const calculatePositiveSum = (numbers: number[]): number => {
  return numbers
    .filter(num => num > 0) 
    .reduce((total, current) => total + current, 0); 
};

const sampleArray = [1, -4, 12, 0, -3, 29, -150];
const positiveSumResult = calculatePositiveSum(sampleArray);
console.log(positiveSumResult); 

// 48 masala

const extractInitials = (fullName: string): string => {
  return fullName
    .split(' ') 
    .map(word => word.charAt(0).toUpperCase()) 
    .join(''); 
};

const nameString = 'George Raymond Richard Martin';
const initialsResult = extractInitials(nameString);
console.log(initialsResult);


// 49 masala

interface Individual {
  name: string;
  age: number;
}

const findAgeDifference = (individuals: Individual[]): number => {
  if (individuals.length === 0) return 0; 

  const sortedIndividuals = individuals.sort((a, b) => a.age - b.age);
  const youngestAge = sortedIndividuals[0].age; // Eng yosh
  const oldestAge = sortedIndividuals[sortedIndividuals.length - 1].age; 

  return oldestAge - youngestAge; 
};

const peopleArray: Individual[] = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const ageDifferenceResult = findAgeDifference(peopleArray);
console.log(ageDifferenceResult);

// 50 masala


const singleNumber = function(nums: (number | boolean)[]): number[] {
  return nums.filter(num => typeof num === 'number' && nums.indexOf(num) === nums.lastIndexOf(num));
};

// Test
const result7 = singleNumber([4, 1, 2, 1, 2, 9, true]);
console.log(result7); 
























