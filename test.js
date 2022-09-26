let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function test() {
   let newArr = [];
   for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
         newArr.push(arr[i] + 1);
      }
   }
   return newArr;
}

console.log(test());
