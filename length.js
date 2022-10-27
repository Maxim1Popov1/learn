









// let multiply = (number) => {
//     let stringNum = String(number);
//     let degree = 5;
//     let degreeNumber = 0
//         console.log(degreeNumber);
//         if (number < 0) {
//          degreeNumber =  degree ** (stringNum.length - 1) 
//         } else {
//         degreeNumber = degree ** stringNum.length
//         }

//         return (degreeNumber * number);


   
// }

// multiply(30)










// let XO = (word) => {
//     let lowerWord = word.toLowerCase();
//   let sumX = 0;
//   let sumO = 0;

//   for (let i = 0; i < lowerWord.length; i++) {
//     // console.log(lowerWord[i]);
//     if (lowerWord[i] == "x") {
//       sumX = sumX + 1;
//     }
//     if (lowerWord[i] == "o") {
//       sumO = sumO + 1;
//     }
//   }
//   if (sumO === sumX) {
//     return true; 
//   } else {
//     return false
//   }
// // return word;

// //   console.log("sumX :>> ", sumX);
// //   console.log("sumO :>> ", sumO);
// };

// XO('ooXm');



// function letters(str) {
//   let sum = 0;
//   let array = [];
//     for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
//     if (str[i]=="Н"){
//         sum=sum+1;
//         array.push('Н=1')
//     }
//     if (str[i]=="К"){
//         sum=sum+5;
//         array.push('К=5')
//     }
//     if (str[i]=="Р"){
//         sum=sum+4;
//         array.push('Р=4')
//     }
//     if (str[i]=="О"){
//         sum=sum+7;
//         array.push('О=7')
//     }
//     if (str[i]=="П"){
//         sum=sum+2;
//         array.push('П=2')
//     }
//    }
//    console.log(sum)
//    console.log(array)
// }

// letters("НННКПРРРРОРППППР")

// let transfer = (word) => {
//   const res = word
//   .split(". ")
//   .map((item) => {
//    console.log('item :>> ', item);
//     const splitArr = item.split(" ");
//     return splitArr[0];
//   });
//   console.log("res :>> ", res);
// };
// transfer(
//   "Написать функцию. которая принимает два числа. возращает результат их умножения" // текст перебора
// );

// let hi = (timeHi) => {     // не работает через swith нужно через if
//    switch (timeHi) {

//       case (timeHi <= 12 || timeHi >= 8):
//       console.log('утро');
//       break;
//       case (timeHi <= 17 >= 13):
//       console.log('день');
//       break;
//       case (22 <=  timeHi >= 18):
//       console.log('вечер');
//       break;
//       case (timeHi <= 7 >= 23):
//       console.log('ночь');
//       break;

//    }
// }
// hi(11)

// let hi = (timeHi) => {

// function camelize(str) {
//   return str
//     .split('-')
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join('');
// }
// console.log(camelize('lol-kek-cheburek'));

// let dayWeek = day => {
//     switch (day) {
//         default:
//             console.error('error');
//             break;
//             case 1:
//             console.log('пн');
//             break;
//         case 2:
//             console.log('вт');
//             break;
//         case 3:
//             console.log('ср');
//             break;
//         case 4:
//             console.log('чт');
//             break;
//         case 5:
//             console.log('пт');
//             break;
//         case 6:
//             console.log('субб');
//             break;
//         case 7:
//             console.log('вск');
//             break;

//     }
// }
// dayWeek(22);

// let sexFunc = (sex) => {

//     if (sex == 'мужской') {
//        console.log('Ваш пол мужской');
//     } else if (sex == 'женский') {
//         console.log("Ваш пол женский")
//     } else{
//         console.error('error')
//     }
// return(sex);
// }
// sexFunc('женский');

// let nameAge = (name, lastName, middleName, age) => {
//     let message = ('Привет' + lastName + name + middleName + ' ' + age)
//     return message;
// }
// console.log(nameAge(' max', ' popov', ' serg', 27));

// const sum = (a, b) => a * b;
// console.log(sum(2 , 2));

// function minMax(min, max) {
//     const array = [];

//     for (let i =min; i<max; i++) {
//         array.push(i)
//          console.log(array)
//     }
//     console.log(array.length)
// }

// minMax(1, 9)

// function pars(a, b) {
//   //   for (let i = 0; i < a.length; i++) {
//   //     // if (a[i] == b) {
//   //     //     a.replaceAt(i, a[i].toUpperCase())
//   //     // }
//   //     console.log(a[i]);
//   //   }
//   const result = a
//     .split("")
//     .map((letter) => {
//       if (letter == b) {
//         letter = letter.toUpperCase();
//       }
//       return letter;
//     })
//     .join("");
//   console.log("result :>> ", result);
// }

// pars("привет мир!", "в");

// function letters(str) {
//   let sum = 0;
//   let array = [];
//     for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
//     if (str[i]=="Н"){
//         sum=sum+1;
//         array.push('Н=1')
//     }
//     if (str[i]=="К"){
//         sum=sum+5;
//         array.push('К=5')
//     }
//     if (str[i]=="Р"){
//         sum=sum+4;
//         array.push('Р=4')
//     }
//     if (str[i]=="О"){
//         sum=sum+7;
//         array.push('О=7')
//     }
//     if (str[i]=="П"){
//         sum=sum+2;
//         array.push('П=2')
//     }
//    }
//    console.log(sum)
//    console.log(array)
// }

// letters("НННКПРРРРОРППППР")

// function dateWeek(day) {
//     if (day == 1)  console.log("Понедельник")
//     else if (day == 2) {console.log("вт")}
//     else if(day == 3)  {console.log("с")}
//     else if(day == 4)  {console.log("ч")}
//     else if(day == 5)  {console.log("п")}
//     else if (day == 6) {console.log("с")}
//    else if (day == 7)  {console.log("в")}
//    else {console.log("ошибка")}
//    return(dateWeek)
//  }

// dateWeek(2)

// function dateWeek(day) {
//     switch (day) {
//         case 1:
//         console.log("Понедельник");
//         break;

//         case 2:
//         console.log("вт");
//         break;

//         case 3:
//         console.log("с");
//         break;

//         case 4:
//         console.log("ч");
//         break;

//         case 5:
//         console.log("п");
//         break;

//         case 6:
//         console.log("с");
//         break;

//         case 7:
//         console.log("в");
//         break;

// }

// }
// dateWeek(3)

// function costInternet(n) {
//     let oneDay = 450 / 30;
//     let result = oneDay * n;
//     console.log(result)
//     return(result)
// }

// let sdsd = costInternet(20);
// console.log('sdsd :>> ', sdsd);

// function checkAge(age) {
//    return (age > 18 || console.log("ne 18"))

//   }

//   function checkAge(age) {

//   return age > 18 ? true : confirm("message");

// }

// function filterRange(arr, a, b) {

// return arr.filter(item => (a <=item && item <= b));

// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// function length(array) {
//   console.log("array :>> ", array);
//   let count = 0;
//   if (typeof array === "string") {
//     console.log("string");
//     const arr = Array.from(array);
//     console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//   count = count + 1;
// }
// console.log("count :>> ", count);
// return count;

//   } else if (Array.isArray(array)) {
//     for (let i = 0; i < array.length; i++) {
//       count = count + 1;
//     }
//     console.log("count :>> ", count);
//     console.log("array");
//     console.log("type is", typeof array);
//     return count;
//   } else {
//     console.log("ошибка");
//   }
// }

//  const arrayLength = length("sdsgsdgsgs");
// const arrayLength = length([1, 2, 3, 4, 5, 6, 7, 8]);
// // const arrayLength = length(435335);
// console.log(arrayLength)
