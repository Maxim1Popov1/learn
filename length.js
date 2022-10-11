






















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












// function camelize(str) {
//   return str
//     .split('-') 
//     .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//     .join(''); 
// }
// console.log(camelize('lol-kek-cheburek'));





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




