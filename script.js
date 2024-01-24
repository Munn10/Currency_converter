// const massMuneer = 104;
// const heightMuneer = 1.69;
// const massNassu = 60;
// const heightNassu = 1.45;

// const BMIMunna = massMuneer / heightMuneer ** 2;
// const BMINassu = massNassu / (heightNassu * heightNassu);
// const MarkHeigherBMI = BMIMunna > BMINassu;

// console.log(BMIMunna,BMINassu);
// console.log(MarkHeigherBMI)

// const firstName = 'Muneer';
// const lastName = 'Ahmad';
// const birthYear = 1996;
// const currentYear = 2023;

// // const intro = `Hi i'm ${firstName} ${lastName} and my age is ${currentYear - birthYear}`;
// // console.log(intro)

// const intro = `Hi My name is ${firstName} ${lastName}
// and my age is ${currentYear - birthYear}
// old
// `
// console.log(intro)

// const age = 16;

// if (age >= 18){
//     console.log("You can apply for Driving licence 🚗")
// } else{
//     const yearsLeft = 18 - age
//     console.log(`You are too young to drive a car 😒. Wait for ${yearsLeft} years`)
// }

// const birthYear = 2005;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else{
//     century = 21;
// }
// console.log(century)

// const massMuneer = 104;
// const heightMuneer = 1.69;
// const massNassu = 60;
// const heightNassu = 1.45;

// const BMIMunna = massMuneer / heightMuneer ** 2;
// const BMINassu = massNassu / (heightNassu * heightNassu);
// // const MarkHeigherBMI = BMIMunna > BMINassu;

// if(BMIMunna > BMINassu){
//     console.log(`Munna's BMI (${BMIMunna}) is higer than Nassu (${BMINassu})`)
// } else{
//     console.log( `Nassu BMI (${BMINassu}) is heiger than Munna (${BMIMunna})`)
// }

// conver string to number:

// const inputNumber = Number('1996');
// console.log(inputNumber + 26)

// // convert number to string

// console.log( String(26), 26);

//switch statement
// let day = 9;
// switch(day){
//     case 0:console.log('Sunday');break;
//     case 1:console.log('Monday');break;
//     case 2:console.log('Tuesday');break;
//     case 3:console.log('Wednesday');break;
//     case 4:console.log('Thursday');break;
//     case 5:console.log('Friday');break;
//     case 6:console.log('Saturday');break;
//     default:console.log("Invalid Day");break;
// }

//While loop:

// let i=0;

// while (i <= 9) {
//     console.log(i);
//     i++
// }

//Example:
// let number = 10;
// let total = 0;
// let i=0;

// while (i <= 10) {
//     total = total + i;
//     i++;
// }

// console.log(total);

//for loop:
// for(let i=0; i<=9;i++){
//     console.log(i);
//     // console.log(`Current value of i is ${i}`);
// }
//Example:
// let number = 10;
// let total = 0;
// for (let i = 0; i <= number; i++) {
//   total = total + i;
//   // console.log(total)
// }
// console.log(total);

// let number = 10;

// let total = 0;

// for (let i = 0; i <= number; i++) {
//   total = total + i;
//   console.log(total);
// }

// console.log(total);

// ==========> Callbacks <=============

// ==> Understanding of callbacks

const func1 = (callback) => {
  console.log("Function 1 is doing task 1");
  callback();
};

const func2 = (callback) => {
  console.log("Function 2 is doing task 2");
  callback();
};

// const func3 = () => {
//   console.log("Function 3 is doing task 3");
// };

// func1(func2(func3));
// func1(func2(func3));
// func2();

const getTwoNumsAndAdd = (num1, num2, onSuccess, onFailure) => {
  //   console.log(num1, num2);
  if (typeof num1 === "number" && typeof num2 === "number") {
    onSuccess(num1, num2);
  } else {
    // console.log("Wrong data type!");
    onFailure();
  }
};

// const addTwoNums = (number1, number2) => {
//   console.log(number1 + number2);
// };

getTwoNumsAndAdd(
  3,
  4,
  (number1, number2) => {
    console.log(number1 + number2);
  },
  () => {
    console.log("Wrong data type!");
    console.log("Please enter numbers only");
  }
);

// getTwoNumsAndAdd(3, 4);
// addTwoNums(3, 4);

const h1 = document.querySelector(".heading1");
const h2 = document.querySelector(".heading2");
const h3 = document.querySelector(".heading3");
const h4 = document.querySelector(".heading4");
const h5 = document.querySelector(".heading5");
const h6 = document.querySelector(".heading6");
const h7 = document.querySelector(".heading7");
const h8 = document.querySelector(".heading8");

// setTimeout(() => {
//   h1.style.color = "red";
//   setTimeout(() => {
//     h2.style.color = "green";
//     setTimeout(() => {
//       h3.style.color = "purple";
//       setTimeout(() => {
//         h4.style.color = "yellow";
//         setTimeout(() => {
//           h5.style.color = "brown";
//           setTimeout(() => {
//             h6.style.color = "pink";
//             setTimeout(() => {
//               h7.style.color = "magenta";
//               setTimeout(() => {
//                 h8.style.color = "orange";
//               }, 1000);
//             }, 2000);
//           }, 3000);
//         }, 1000);
//       }, 2000);
//     }, 3000);
//   }, 1000);
// }, 2000);

// const p1 = new Promise(resolve,reject){

// }
