// -------         exercize - mod4    #2     ---------

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(pizzaName);
//   return callback(pizzaName);
// }

// console.log(Math.random());

// -------         exercize - mod4    #4     ---------
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return makePizza(pizzaName);
//     }
//     {
//       return onOrderError(pizzaName);
//     }
//   },
// };
// // Change code above this line
// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }
// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }
// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ----------- mod4             #5               --------------
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });
//   console.log(number);
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);

// ----------- mod4             #6               --------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   console.log(filteredNumbers);
//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);

// ----------- mod4             #7               --------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }
//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);

// ----------- mod4             #8               --------------
// Change code below this line
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;
//   const order = (item) => {
//     totalPrice += item;
//   };
//   orderedItems.forEach(order);
//   // orderedItems.forEach((item) => {
//   //   totalPrice += item;
//   // });
//   // зверху також працює - це скорочення еммета
//   //   forEach(function (item) {
//   //   totalPrice += item;
//   // });
//   console.log(totalPrice);
//   return totalPrice;
// };
// // Change code above this line
// calculateTotalPrice([12, 85, 37, 4]);

// ----------- mod4             #8               --------------
// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
//   // Change code above this line
//   return filteredNumbers;
// };
// filterArray([12, 24, 8, 41, 76], 38);

// ----------- mod4             #13              --------------
// function changeEven (numbers, value) {
//   // Change code below this line
//   const newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       element = element + value;
//       // newArray.push(element + value);
//     }
//     newArray.push(element);
//   });
// return newArray;
// };
// changeEven([1, 2, 3, 4, 5], 10);

// ----------- mod4             #13              --------------
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map((planet) => planet.length);

// ----------- mod4             #16              --------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line
// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

// ----------- mod4             #21                 --------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line
// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// ----------- mod4             #21                 --------------
// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age >= minAge && age < maxAge);
// };

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };

// // Change code below this line
// const getFriends = (users) => {
//   const all = users.flatMap(({ friends }) => friends);
//   return all.filter((friend, index, array) => array.indexOf(friend) === index);
// };

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE);
// const bookByAuthor = books.find(({ author }) => author === AUTHOR);

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// // -----------             mod4     #34                  --------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((pre, num) => {
//   return pre + num;
// });

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// // -----------             mod4     #35                  --------------
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const midTime = players.flatMap(
//   (player) => player.playtime / player.gamesPlayed
// );
// const totalAveragePlaytimePerGame = midTime.reduce((pre, next) => pre + next);

// // -----------             mod4     #36                  --------------
// // Change code below this line
// const calculateTotalBalance = (users) => {
//   const allBallans = users.flatMap((user) => user.balance);
//   console.log(allBallans.reduce((total, bal) => total + bal));
// };
// // Change code above this line

// // -----------             mod4     #37                  --------------
// // Change code below this line
// const getTotalFriendCount = (users) => {
//   const allFriends = users.flatMap((user) => user.friends);
//   // console.log(allFriends);
//   return allFriends.reduce((all, next) => all + next);
// };
// // Change code above this line

// // Change code below this line
// const getTotalFriendCount = (users) => {
//   // const all = users.reduce((user, next) => user.friends);
//   console.log(users.reduce((one, next) => ).length);
//   return;
// };
// // Change code above this line

// // -----------             mod4     #40                  --------------
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // -----------             mod4     #41                  --------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((bookA, bookB) =>
//   bookA.author.localeCompare(bookB.author)
// );

// const sortedByReversedAuthorName = [...books].sort((bookA, bookB) =>
//   bookB.author.localeCompare(bookA.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (bookA, bookB) => bookA.rating - bookB.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (bookA, bookB) => bookB.rating - bookA.rating
// );

// // -----------             mod4     #41                  --------------
// // Change code below this line
// const sortByDescendingFriendCount = (users) => {
//   [...users].sort((userA, userB) => userA.friends.length() - userB.friends.length())
//  };
// // Change code above this line

// // -----------             mod4     #44                  --------------
// // Change code below this line
// const sortByName = (users) => {
//   [...users].sort((a, b) => b.name.localeCompare(a.name));
// };
// // Change code above this line

// // -----------             mod4     #45                  --------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line
// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .sort((bookA, bookB) => bookA.localeCompare(bookB));

// console.log(names);

// // -----------             mod4     #47                  --------------
// const getSortedFriends = (users) => {
//   return users
//     .flatMap((user) => user.friends)
//     .filter((user, index, array) => array.indexOf(user) === index)
//     .sort();
// };

// // -----------             mod4     #48                  --------------

const getTotalBalanceByGender = (users, gender) => {
  console.log(
    users
      .filter((user) => user.gender === gender)
      .reduce((totalBal, studentBal) => totalBal + studentBal.balance, 0)
  );
};

console.log(
  getTotalBalanceByGender(
    [
      {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
      },
      {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
      },
      {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
      },
      {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
      },
      {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male",
      },
      {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: [
          "Jacklyn Lucas",
          "Linda Chapman",
          "Adrian Cross",
          "Solomon Fokes",
        ],
        isActive: false,
        balance: 1498,
        gender: "male",
      },
      {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
      },
    ],
    "male"
  )
);
