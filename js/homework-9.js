import { userComments } from "./comments.js";

//Level 1

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedNumbers = numbers.slice(4, 10);
console.log(slicedNumbers);

let carBrands = ["toyota", "mercedes", "bmw", "mitsubishi"];
console.log(carBrands.includes("bmw"));

function reverseArrays(firstArray, secondArray) {
  firstArray.reverse();
  secondArray.reverse();
};

reverseArrays(carBrands, slicedNumbers);
console.log(carBrands, slicedNumbers);



//Level 2

const commentsWithComEmail = userComments.filter(comment => comment.email.includes(".com"));
const commentTexts = commentsWithComEmail.map((comment) => comment.body)
console.log(commentTexts);

userComments.forEach((comment) => {
  comment.id <= 5 ? comment.postId = 2 : comment.postId = 1;
});
console.log(userComments);

const commentAuthors = userComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(commentAuthors);

const validatedComments = userComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));
console.log(validatedComments);



//Level 3

const userEmails = userComments.map(comment => comment.email);
console.log(userEmails);

const userEmailsWithReduce = userComments.reduce((emails, comment) => {
  emails.push(comment.email);
  return emails;
}, []);
console.log(userEmailsWithReduce);

const emailsString = userEmails.join(", ");
console.log(emailsString);