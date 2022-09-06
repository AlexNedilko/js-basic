// exercize -- mod1 #6
// const orderQuantity = 6;
// const pricePerDroid = 800;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// exercize -- mod1 #7
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }
// sayHi();

// exercize -- mod1 #8
// Change code below this line
// function add(x, y, z) {
//   console.log(`Addition result equals ${x + y + z}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// exercize -- mod1 #9
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8);
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// -------  exercize - mod1 #10   ---------
// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }
// makeMessage("Radar", 6150);
// makeMessage("Scanner", 3500);
// makeMessage("Reactor", 8000);
// makeMessage("Engine", 4070);

// -------  exercize - mod1 #11   ---------
// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice(5, 100);
// calculateTotalPrice(8, 60);
// calculateTotalPrice(3, 400);
// calculateTotalPrice(1, 3500);
// calculateTotalPrice(12, 70);

// -------  exercize - mod1 #12   ---------
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   //   let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   //   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   const message = `You ordered droids worth ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } credits. Delivery (${deliveryFee} credits) is included in total price.`;
//   // Change code above this line
//   return message;
// }
// makeOrderMessage(2, 100, 50);
// makeOrderMessage(4, 300, 100);
// makeOrderMessage(10, 70, 200);

// -------  exercize - mod1 #13   ---------
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
//   console.log(passed);
//   // Change code above this line
//   return passed;
// }
// isAdult(20);
// isAdult(14);
// isAdult(8);
// isAdult(37);

// -------  exercize - mod1 #14   ---------
// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;
//   // Change code above this line
//   return isMatch;
// }
// isValidPassword("mangodab3st");
// isValidPassword("kiwirul3z");
// isValidPassword("jqueryismyjam");

// -------  exercize - mod1 #15   ---------
// function checkAge(age) {
//   let message;
//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }
//   return message;
// }
// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// -------  exercize - mod1 #16   ---------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered <= available) {
//     message = "Order is processed, our manager will contact you.";
//   } else {
//     message = "Not enough goods in stock!";
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// -------  exercize - mod1 #17   ---------
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// -------  exercize - mod1 #18   ---------
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = `Insufficient funds!`;
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// -------  exercize - mod1 #19   ---------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// -------  exercize - mod1 #20   ---------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);

// -------  exercize - mod1 #21   ---------
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line
//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);

// -------  exercize - mod1 #22   ---------
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line
//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// -------  exercize - mod1 #23   ---------
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line
//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// -------  exercize - mod1 #24   ---------
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);
// getDiscount(46900);
// getDiscount(8250);
// getDiscount(1300);
// getDiscount(5000);
// getDiscount(20000);
// getDiscount(50000);

// -------  exercize - mod1 #25   ---------
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered <= available
//       ? "The order is accepted, our manager will contact you"
//       : "Not enough goods in stock!";
//   //   if (ordered > available) {
//   //     message = "Not enough goods in stock!";
//   //   } else {
//   //     message = "The order is accepted, our manager will contact you";
//   //   }
//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// -------  exercize - mod1 #26   ---------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   console.log(message);
//   return message;
// }
// checkPassword("jqueryismyjam");
// checkPassword("angul4r1sl1f3");
// checkPassword("r3actsux");

// -------  exercize - mod1 #27   ---------
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   // Change code above this line
//   return price;
// }

// getSubscriptionPrice("professional");
// getSubscriptionPrice("organization");
// getSubscriptionPrice("starter");

// -------  exercize - mod1 #28   ---------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;
//     default:
//       message = "Access denied, wrong password!";
//   }
//   //   if (password === null) {
//   //     message = "Canceled by user!";
//   //   } else if (password === ADMIN_PASSWORD) {
//   //     message = "Welcome!";
//   //   } else {
//   //     message = "Access denied, wrong password!";
//   //   }
//   //   console.log(message);
//   // Change code above this line
//   return message;
// }
// checkPassword("mangohackzor");
// checkPassword(null);
// checkPassword("polyhax");
// checkPassword("jqueryismyjam");

// -------  exercize - mod1 #29   ---------
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile":
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia":
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica":
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   //   console.log(message);
//   return message;
// }
// getShippingCost("Australia");
// getShippingCost("Germany");
// getShippingCost("China");
// getShippingCost("Chile");
// getShippingCost("Jamaica");
// getShippingCost("Sweden");

// -------  exercize - mod1 #30   ---------
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   console.log(message);
//   return message;
// }
// getNameLength("Poly");
// getNameLength("Harambe");
// getNameLength("Billy");
// getNameLength("Joe");

// -------  exercize - mod1 #31   ---------
// const courseTopic = "JavaScript essentials";
// // Change code below this line
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);
// // Change code above this line

// -------  exercize - mod1 #32   ---------
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
//   console.log(substring);
//   return substring;
// }
// getSubstring("Hello world", 3);
// getSubstring("Hello world", 6);
// getSubstring("Hello world", 8);
// getSubstring("Hello world", 11);
// getSubstring("Hello world", 0);

// -------  exercize - mod1 #33   ---------
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     maxLength < message.length ? `${message.slice(0, maxLength)}...` : message;
//   // Change code above this line
//   return result;
// }
// formatMessage("Curabitur ligula sapien", 16);
// formatMessage("Curabitur ligula sapien", 23);
// formatMessage("Vestibulum facilisis purus nec", 20);
// formatMessage("Vestibulum facilisis purus nec", 30);

// -------  exercize - mod1 #34   ---------
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// -------  exercize - mod1 #35   ---------
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// -------  exercize - mod1 #36   ---------
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result =
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale");
//   // Change code above this line
//   console.log(result);
//   return result;
// }
// checkForSpam("Latest technology news");
// checkForSpam("JavaScript weekly newsletter");
// checkForSpam("Get best sale offers now!");
// checkForSpam("Amazing SalE, only tonight!");

// -------  exercize - mod2 #1   ---------
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }
//   return "You are a minor";
// }
// checkAge(5);
// console.log(message);

// -------  exercize - mod2 #2   ---------
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// -------  exercize - mod2 #2   ---------
// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// -------  exercize - mod2 #4   ---------
// const fruits = ["apple", "plum", "pear", "orange"];

// -------  exercize - mod2 #5   ---------
// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];
// // Change code below this line

// -------  exercize - mod2 #6   ---------
// const fruits = ["apple", "plum", "pear", "orange"];
// console.table(fruits);
// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.table(fruits);

// -------  exercize - mod2 #7   ---------
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// -------  exercize - mod2 #8   ---------
// const fruits = ["apple", "peach", "pear", "banana"];
// // Change code below this line
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// -------  exercize - mod2 #9   ---------
// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
//   return [firstElement, lastElement];
//   // Change code above this line
//   console.log(firstElement, lastElement);
// }
// getExtremeElements([1, 2, 3, 4, 5]);

// -------  exercize - mod2 #10   ---------
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }

// -------  exercize - mod2 #11   ---------
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let total = 0;
//   let messageSplit = message.split(" ");
//   total = messageSplit.length * pricePerWord;
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// calculateEngravingPrice("JavaScript is in my blood", 10);

// -------  exercize - mod2 #12   ---------
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   return array.join(delimeter);
//   // Change code above this line
//   return string;
// }

// -------  exercize - mod2 #13   ---------
// function slugify(title) {
//   // Change code below this line
//   let slug;
//   slug = title.split(" ").join("-").toLowerCase();
//   console.log(slug);
//   return slug;
//   // Change code above this line
// }
// slugify("Arrays for begginers");

// -------  exercize - mod2 #14   ---------
// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// -------  exercize - mod2 #15   ---------
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// -------  exercize - mod2 #16   ---------
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let newArray;
//   newArray = firstArray.concat(secondArray).slice(0, maxLength);
//   console.log(newArray);
//   return newArray;
//   // Change code above this line
// }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 2);

// -------  exercize - mod2 #17   ---------
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// -------  exercize - mod2 #18   ---------
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
//   // Change code above this line
// }
// calculateTotal(15);

// -------  exercize - mod2 #19   ---------
// const fruits = ["apple", "plum", "pear", "orange"];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// -------  exercize - mod2 #20   ---------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     const price = order[i];
//     total += price;
//   }
//   // Change code above this line
//   return total;
// }

// -------  exercize - mod2 #21   ---------
// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   console.log(longestWord);
//   return longestWord;
//   // Change code above this line
// }
// findLongestWord("The quick brown fox jumped overdfsfd the lazysdfsfsdfsfd dog");

// -------  exercize - mod2 #22   ---------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//     console.log(i);
//   }
//   // Change code above this line
//   console.log("Numbers - ", numbers);
//   return numbers;
// }
// createArrayOfNumbers(14, 17);

// -------  exercize - mod2 #23   ---------
// function filterArray(numbers, value) {
//   // Change code below this line
//   let filtered = [];
//   for (const number of numbers) {
//     if (number <= value) {
//       continue;
//     }
//     filtered.push(number);
//     console.log(number);
//     console.log(filtered);
//   }
//   return filtered;
//   // Change code above this line
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([12, 24, 8, 41, 76], 38);

// -------  exercize - mod2 #24   ---------
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit); // Change this line
// }

// -------  exercize - mod2 #25   ---------
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonArray = [];
//   for (const element of array1) {
//     if (array2.includes(element)) {
//       commonArray.push(element);
//     }
//     console.log(element);
//   }
//   console.log(commonArray);
//   return commonArray;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// -------  exercize - mod2 #26   ---------
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const price of order) {
//     total += price;
//   }
//   // Change code above this line
//   return total;
// }

// -------  exercize - mod2 #27   ---------
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];
//     for (const number of numbers) {
//     //   for (let i = 0; i < numbers.length; i += 1) {
//     // const number = numbers[i];
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
//   // Change code above this line
// }

// -------  exercize - mod2 #28   ---------

// Change code below this line
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;

// -------  exercize - mod2 #29   ---------
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 !== 0) {
//       continue;
//     }
//     evenNumbers.push(i);
//   }
//   return evenNumbers;
//   // Change code above this line
// }
// getEvenNumbers(3, 11);

// -------  exercize - mod2 #30   ---------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// -------  exercize - mod2 #31   ---------
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   // Change code above this line
// }

// -------  exercize - mod2 #32   ---------
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i <= array.length - 1; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
