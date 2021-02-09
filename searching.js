let data = [
  { name: "bryan" },
  { name: "hope" },
  { name: "light" },
  { name: "david" },
  { name: "paul" },
  { name: "emma" },
  { name: "stewart" },
  { name: "victor" },
  { name: "friday" },
];

console.log(data.length)
console.log(data.sort(function(a,b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
}))
let arr = [9, 8, 7, 5, 4, 3, 6, 2, 1];
let length = arr.length - 1;
function search(arr,value,left,length){
    arr.sort()
    let index1 = left;
    let index2 = arr.length - 1;
    let searchValue = value;
    let midPoint = Math.round((index1 + index2) / 2)
    
    if (arr[midPoint] > searchValue){
        return search(arr, value, midPoint + 1, index2);
    }else if(arr[midPoint] < searchValue){
        return search(arr, value, index1, midPoint - 1);
    }else if (arr[midPoint] == searchValue) {
        return "Found 😀: " +  midPoint;
    }
}


console.log(search(arr,5,0,length))
//[1,2,3,4,5,6,7,8,9]
// L         M      R

// for (var i = 0; i < str.length; i++) {
//   console.log(str.charCodeAt(i) - 96);
// }


let dataset = [
    {name : 'bryan'},
    {name : 'john'},
    {name : 'emma'},
    {name : 'martha'}
];

let sorted = dataset.sort(function(a,b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
})

console.log(sorted)

function getCharcode(str){
    let charcode = '';
    for (var i = 0; i < str.length; i++) {
      charcode += str.charCodeAt(i) - 96;
    }
    return charcode
}

function binarySearchText(sorteddata, arr, value, left, length) {
  let refArray = arr;
  let index1 = left;
  let index2 = length - 1;
  let searchValue = value;
  let midPoint = Math.round((index1 + index2) / 2);
  console.log(midPoint)

  let str = searchValue;
  let charcode = "";
  for (var i = 0; i < str.length; i++) {
    charcode += str.charCodeAt(i) - 96;
  }
  
  
  console.log(str)
  console.log(arr[midPoint])
  console.log(arr)
  console.log(sorteddata)
  console.log(str)

  console.log(sorteddata[arr[midPoint]].name);
  let charMidPoint = parseInt(getCharcode(sorteddata[arr[midPoint]].name));
  let newStr = parseInt(getCharcode(str));
  console.log(charMidPoint);
  console.log(newStr)

  console.log(charMidPoint < newStr);
    // if(charMidPoint > str){
    //     return binarySearchText(sorteddata, arr, value, midPoint + 1, index2);
    // }else if(charMidPoint < str){
    //     return binarySearchText(sorteddata, arr, value, index1, midPoint - 1);
    // }else if(charMidPoint == str){
    //     return 'hhhh'
    //     // return "Found 😀: " + sorteddata[arr[midPoint]];
    // }
    // return 'jjjjjj'


//   if (arr[midPoint] > searchValue) {
//     return search(sorted ,arr, value, midPoint + 1, index2);
//   } else if (arr[midPoint] < searchValue) {
//     return search(sorted, arr, value, index1, midPoint - 1);
//   } else if (arr[midPoint] == searchValue) {
//     return "Found 😀: " + midPoint;
//   }
//   return refArray;
}

let lists = [1,2,3,4]
let llenght = lists.length
console.log(binarySearchText(sorted, lists, "bryan", 0, llenght));




let arry = [9, 8, 7, 5, 4, 3, 6, 2, 1];
let lengthy = arr.length - 1;
function search(arr, value, left, length) {
  arr.sort();
  console.log(arr)
  let index1 = left;
  let index2 = length - 1;
  let searchValue = value;
  let midPoint = Math.round((index1 + index2) / 2);

  if (arr[midPoint] > searchValue) {
    return search(arr, value, midPoint + 1, index2);
  } else if (arr[midPoint] < searchValue) {
    return search(arr, value, index1, midPoint - 1);
  } else if (arr[midPoint] == searchValue) {
    return "Found 😀: " + midPoint;
  }
}

console.log(search(arry,4,0,lengthy))