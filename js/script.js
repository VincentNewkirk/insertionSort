function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++){
    //if i is less than the previous number
    if(arr[i] < arr[i-1]){
      //start at i  and decrement down the list
      for(var k = i; k >= 1; k--){
        //if current index is greater than previous index
        if(arr[k] < arr[k -1]){
          //insert element when it finds one that it's greater than.
          //then remove element from it's original position
          var element = arr[k];
          arr.splice(k ,1);
          arr.splice(k - 1, 0, element);
        }
      }
    }
  }
  console.log(arr);
  return arr;
}

module.exports = insertionSort;