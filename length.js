function length(array) {
  if (typeof array === "string") {
        console.log("string");
    const arr = Array.from(array);
        console.log(arr);
        let i = 0;
    for (let i = 0; i < arr.length; i++ ) {
         console.log(arr[i]) 
        
    };
    const array = [arr[i]];
    const arrayLength = length(arr);
    console.log(arrayLength);
    return(arr[i]);
  } else if (Array.isArray(array)) {
    console.log("array");
    console.log("type is", typeof(array));
  } else {
    console.log("ошибка");
  }

 
}

length("sdsgsdgsgs");

// length([1, 2, 3, 4]);
// length(435335)
