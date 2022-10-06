function length(array) {
  if (typeof array === "string") {
        console.log("string");
    const arr = Array.from(array);
        console.log(arr);

    for (let i = 0; i < arr.length; i++ ) {
       let len = arr[i];
         console.log(len)
    };
   



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
