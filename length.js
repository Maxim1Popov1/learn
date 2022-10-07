function length(array) {
  console.log("array :>> ", array);
  let count = 0;
  if (typeof array === "string") {
    console.log("string");
    const arr = Array.from(array);
    
    for (let i = 0; i < arr.length; i++) {
      count = count + 1;
    }
    console.log("count :>> ", count);
    return count;
   
    
  } else if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      count = count + 1;
    }
    console.log("count :>> ", count);
    console.log("array");
    console.log("type is", typeof array);
    return count;
  } else {
    console.log("ошибка");
  }
}

//  const arrayLength = length("sdsgsdgsgs");
const arrayLength = length([1, 2, 3, 4, 5, 6, 7, 8]);
// const arrayLength = length(435335);
console.log(arrayLength)