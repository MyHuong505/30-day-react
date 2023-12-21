const numbers = [1,2,3,4,5,6,7,5]
console.log(numbers);
console.log(numbers.lastIndexOf(5),'lastIndexOf(): Kiểm tra vị trí cuối cùng của số 5');
console.log(numbers.toString(),'toString(): Chuyển đổi mảng thành chuỗi mặc định ngăn cách bằng dấu phẩy');
console.log(Array.isArray(numbers),'Array.isArray() Kiểm tra có phải là mảng ko?')
console.log(numbers.join('-'),'join(): Chuyển đổi mảng thành chuỗi ngăn cách bằng dấu gạch ngang/ hoặc bất kỳ ký hiệu nào khác')
console.log(numbers.slice(1,4),'slice(giá trị đầu "1", giá trị cuối "4"): hàm sẽ trả về giá trị nằm giữa "đầu" và "cuối"');
let spliceExp = numbers.splice(1,2,10);
console.log(numbers,'splice(""1" vị trí phần tử bắt đầu dc thay thế","2" "remove bao nhiêu phần tử tính từ phần tử đầu tiên","10" "giá trị mới"), trả về mảng mới');
console.log(spliceExp,'Trả về các giá trị bị remove');
numbers.push(8,2)
console.log(numbers,'Hàm push thêm giá trị sau mảng')
numbers.pop();
console.log(numbers,'Hàm pop() loại bỏ phần tử cuối cùng trong mảng')
numbers.shift();
console.log(numbers,'Hàm shift() loại bỏ phần tử đầu tiên trong mảng')
numbers.unshift(1)
console.log(numbers,'Hàm unshift() thêm giá trị vào đầu mảng');
numbers.reverse();
console.log(numbers,'Đảo chiều của mảng')
const ABC = ["s","c","f","g","a","b"]
ABC.sort();
console.log(ABC,'Hàm sort sắp xếp thứ tự theo chiều tăng dần')
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
console.log(shoppingCart)
shoppingCart.push("Sugar")
console.log(shoppingCart)
let index = shoppingCart.indexOf("Honey");
if (index !== -1) {
    shoppingCart.splice(index,1);
}
console.log(shoppingCart)

let index1 = shoppingCart.indexOf("Tea")
if (index1 !== -1) {
    shoppingCart[index1] = "Green Tea"
}
console.log(shoppingCart)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia")
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)
const fullStack2 = [...frontEnd,...backEnd]
console.log(fullStack2)

let middle = Math.ceil(countries.length/2)
if (countries.length % 2 === 0){
    console.log(countries[middle-1], countries[middle])
} else {
    console.log(countries[middle-1])
}

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort()
console.log(ages)
const minAge = ages[0];
const maxAge = ages[ages.length-1]
console.log(minAge)
console.log(maxAge)
const middleAge = Math.floor(ages.length /2)
const medianAge = ages.length % 2 === 0 ? (ages[middleAge-1] + ages[middleAge]) /2 : ages[middleAge] 
console.log(medianAge)

const middleIndex = Math.floor(countries.length/2);
let middleCountry = countries.length % 2 === 0 ? countries.slice(middleIndex-1,middleIndex+1) :
countries[middleIndex];
console.log(middleCountry);

let firstHalf = countries.slice(0,middleIndex)
let secondHalf = countries.slice(middleIndex)
if (countries.length % 2 !==0){
    secondHalf.shift()
}

console.log(firstHalf)
console.log(secondHalf) 

// const userAge = prompt("Enter your age:");
// const age = parseInt(userAge);

// const inputMonth = prompt('Enter your month').toLowerCase();
// let season
// switch (inputMonth) {
//     case 'september':
//     case 'october': 
//         season = 'autumn';
//         break;

//     default: season = 'Invalid month'
//         break;
// }
// console.log(`the season is: ${season}`)

// const inputMonth = prompt("Enter a month").toLowerCase();
// const inputYear = parseInt(prompt("Enter a year"))
// let months = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'];
// const isValidMonth = months.includes(inputMonth)
// if (isValidMonth) {
//     let datesOfMonth = new Date(inputYear, months.indexOf(inputMonth)+1,0).getDate();
//     console.log(`${inputMonth} has ${datesOfMonth} days`);
// } else {
//     console.log('Invalid');
// }
let sum = 0
for (let i = 0; i < 100; i++){
    sum +=i;
}
console.log(sum)

for (const number of numbers){
    console.log(number);
}
//Trên dưới tương đương nhau, tuy nhiên forEach có thể chứa 2 tham số và chính mảng đó
numbers.forEach(number => {
    console.log(number)
})

numbers.forEach((number,i, arr) => {
    console.log(number,i, arr)  
});

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let mostSkills = 0;
  let personMostSkills;

  for (const person in users) {
    let checkSkills = users[person].skills.length;
    if (checkSkills > mostSkills) {
        mostSkills = checkSkills;
        personMostSkills = person;
    }
}

console.log(`${personMostSkills} has the most skilss ${mostSkills} including ${users[personMostSkills].skills}`)
 
const people = [
    {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt: '08/01/2020 9:00 AM',
      isLoggedIn: false,
    },
    {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt: '08/01/2020 9:30 AM',
      isLoggedIn: true,
    },
    {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt: '08/01/2020 9:45 AM',
      isLoggedIn: true,
    },
    {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt: '08/01/2020 9:50 AM',
      isLoggedIn: false,
    },
    {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt: '08/01/2020 10:00 AM',
      isLoggedIn: false,
    },
  ]
  
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy'],
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy'],
    },
  ]

// a. Create a function called rateProduct which rates the product

// function rateProduct(userId,productId,newRating){
//     const product = products.find(p => p._id===productId)
//     if (product){
//         const existingRating = product.ratings.find(r => r.userId === userId)
//         if (existingRating) {
//             existingRating.rate = newRating
//             console.log('New rating updated')

//     } else {
//         product.ratings.push({userId: userId, rate: newRating})
//         console.log('Rating successfully')
//     }
//     }
// }

// //b. Create a function called averageRating which calculate the average rating of a product

// rateProduct('zwf8md','hedfcg',4.8)

// function averageRating(productId){
//     const product = products.find(p => p._id === productId)
//     if (product && product.ratings.length>0){
//         const totalRaings = product.ratings.length;
//         const sumRatings = product.ratings.reduce((sum, rating) => sum + rating.rate,0)
//         const average = sumRatings/totalRaings;
//         console.log(`Average rating for product ${productId}: ${average}`)
//     }
//     else {
//         console.log('No ratings found')
//     }
// } 

// averageRating('hedfcg')


//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

// function likeProduct (productId, userId){
//     const product = products.find(p => p._id === productId)
//     if (product){
//         const userLiked = product.likes.find(likedUser => likedUser === userId)
//         if (!userLiked){
//             product.likes.push(userId);
//             console.log(`${userId} has liked the product ${productId}`)
//         } else {
//             product.likes = product.likes.filter(likedUser => likedUser !== userId)
//             console.log(`${userId} has removed the like from the product ${productId}`)
//         }
//     } else {
//         console.log('Product not found')
//     }
// }

// likeProduct('eedfcf','fg12cy')


//Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). 
//One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const userIdGeneratedByUser = () => {
//   const getInput = (message) => parseInt(prompt(message), 10);

//   const charCount = getInput('Nhập số ký tự cho mỗi ID:');
//   const idCount = getInput('Nhập số lượng ID cần tạo:');

//   if (!(charCount > 0 && idCount > 0)) {
//     return alert('Đầu vào không hợp lệ. Vui lòng nhập số dương hợp lệ.');
//   }

//   const generateUserId = (length) => Array.from({ length }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

//   Array.from({ length: idCount }, (_, i) => console.log(`ID người dùng ${i + 1}: ${generateUserId(charCount)}`));
// };

// userIdGeneratedByUser();

// const userIdGeneratedByUser = () => {
//   const charCount = parseInt(prompt('Nhập số ký tự cho mỗi ID:'), 10);
//   const idCount = parseInt(prompt('Nhập số lượng ID cần tạo:'), 10);

//   if (!(charCount > 0 && idCount > 0)) {
//     console.log('Invalid input. Please enter valid positive numbers.');
//     return;
//   }

//   const generateUserId = (length) => {
//     let result = '';
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     for (let i = 0; i < length; i++) {
//       result += characters.charAt(Math.floor(Math.random() * characters.length));
//     }
//     return result;
//   };

//   for (let i = 0; i < idCount; i++) {
//     console.log(`User ID ${i + 1}: ${generateUserId(charCount)}`);
//   }
// };

// userIdGeneratedByUser();

//  const sumAllnums = (...args) => {
//   let sum = 0;
//   for (const num of args) {
//     sum += num
//   }
//   return sum
//  }

//  console.log(sumAllnums(1,2,3,4,5))
 

//  let sumOfNums = 0;
//  numbers.forEach(e => sumOfNums +=e)
// const sumOfNums = numbers.reduce((sum, e) => sum += e, 0)
//  console.log(sumOfNums)

// const rectangle = {
//   width: 20,
//   height: 10,
// }

// let { width: w, height: h } = rectangle
// console.log(w, h) 


// //Destructuring function
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js',
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)'],
// }

// /*
// Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
// */

// function getPersonInfo(personInf) {
//   const { firstName, lastName, age, country, job, skills, languages} = personInf;
//   return `${firstName} ${lastName} lives in ${country}. He is ${age} yrs. He knows ${skills.join(', ')}`;
// }

// console.log(getPersonInfo(person));

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)


const fruits = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// fruits.forEach((item) => {
//   if (item.price > 0){
//     console.log(`The price of ${item.product} is ${item.price}`)
//   } else {  
//     console.log(`The price of ${item.product} is unknown`)
//   }
// })

// //Calculate the sum of all the prices using forEach
// let totalPrice = 0
// fruits.forEach((item) => {
//   if (typeof item.price === 'number' && !isNaN(item.price)){
//     totalPrice += item.price
//   }
// })
// console.log(totalPrice) 

// //Create an array of prices using map and store it in a variable prices
// const prices = fruits.map(item => item.price)
// console.log(prices)

// //Filter products with prices

// const fruitsWprices = fruits.filter(item => typeof item.price === 'number' && !isNaN(item.price))
// console.log(fruitsWprices)

// //Use method chaining to get the sum of the prices(map, filter, reduce)

// const sumPrice = fruits
//   .map(item => parseFloat(item.price))
//   .filter(price => !isNaN(price))
//   .reduce((acc, curr) => acc + curr, 0)

// console.log(sumPrice)

//Calculate the sum of all the prices using reduce only
// let Price = fruits.filter(item => !isNaN(parseFloat((item.price))))
// console.log(Price)
// const calPrice = Price.reduce((acc, item) => 
//   acc += item.price
// , 0)
// console.log(calPrice)

// const calPrice = fruits.reduce((acc, item) => {
//   const price = parseFloat(item.price) || 0;
//   return acc + price
// },0)
// console.log(calPrice)

// //Find the first product which doesn't have a price value
// console.log(fruits.find(item => typeof item.price !== 'number'))

// //Find the index of the first product which does not have price value
// console.log(fruits.findIndex(item => typeof item.price !== 'number'))


// Create an Animal class. The class will have name, age, color, legs properties and create different m



class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // Method to display information about the animal
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
  }

  // Method to make the animal sound
  makeSound(sound) {
    console.log(`${this.name} makes a ${sound} sound`);
  }
}

// Create an instance of the Animal class
const lion = new Animal('Lion', 5, 'golden', 4);
lion.displayInfo(); // Output: Name: Lion, Age: 5, Color: golden, Legs: 4
lion.makeSound('roaring');

class Dog extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  // Method to wag tail
  wagTail() {
    console.log(`${this.name} wags tail happily`);
  }
}

class Cat extends Animal {
  constructor(name, age, color, legs, breed) {
    super(name, age, color, legs);
    this.breed = breed;
  }

  // Method to purr
  purr() {
    console.log(`${this.name} purrs softly`);
  }
}

// Create instances of Dog and Cat classes
const dog = new Dog('Buddy', 3, 'brown', 4, 'Golden Retriever');
const cat = new Cat('Whiskers', 2, 'gray', 4, 'Persian');

dog.displayInfo(); // Output: Name: Buddy, Age: 3, Color: brown, Legs: 4
dog.makeSound('barking'); // Output: Buddy makes a barking sound
dog.wagTail(); // Output: Buddy wags tail happily

cat.displayInfo(); // Output: Name: Whiskers, Age: 2, Color: gray, Legs: 4
cat.makeSound('meowing'); // Output: Whiskers makes a meowing sound
cat.purr(); 

//Override the method you create in Animal class