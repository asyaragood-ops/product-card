import { userComments } from "./comments.js";

//Level 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersRemain = numbers.slice(4, 10);
console.log(numbersRemain);

let cars = ["toyota", "mercedes", "bmw", "mitsubishi"];
console.log(cars.includes("bmw"));

function reverseArrays(array1, array2) {
  array1.reverse();
  array2.reverse();
};

reverseArrays(cars, numbersRemain);
console.log(cars, numbersRemain);



//Level 2

const comDomainPost = userComments.filter(user => user.email.includes(".com"));
const userCommentsText = comDomainPost.map((userComments) => userComments.body)
console.log(userCommentsText);

userComments.forEach((user) => {
  user.id <= 5 ? user.postId = 2 : user.postId = 1;
});
console.log(userComments);

const nameAndId = userComments.map(user => ({
  id: user.id,
  name: user.name
}));
console.log(nameAndId);

const validatedComment = userComments.map(user => ({
  ...user,
  isInvalid: user.body.length > 180
}));
console.log(validatedComment);



//Level 3

const emailsMap = userComments.map(user => user.email);
console.log(emailsMap);

const emailsReduce = userComments.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);
console.log(emailsReduce);

const emailsToString = emailsMap.join(", ");
console.log(emailsToString);