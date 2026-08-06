const palindromes = function (str) {
    str=str.toUpperCase();
    const punctuationAndSpace = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let j=0;
    let arr=[];
for (let i=0;i<str.length;i++){
    if (!(punctuationAndSpace.includes(str[i]))){
       arr[j]=str[i];
       j++;
    }
}

for (let k=0,l=arr.length-1;k<l;k++,l--){
     if(arr[k]!==arr[l])
        return false;
    }
    return true;
};



// const palindromes = function (str) {
//   // 1. Convert to lowercase to ignore capitalization
//   str = str.toLowerCase();
  
//   const punctuationAndSpace = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//   let j = 0;
//   let arr = [];
  
//   for (let i = 0; i < str.length; i++) {
//     if (!(punctuationAndSpace.includes(str[i]))) {
//       arr[j] = str[i];
//       j++;
//     }
//   }

//   // 2. Change k !== l to k < l to prevent infinite loops
//   for (let k = 0, l = arr.length - 1; k < l; k++, l--) {
//     if (arr[k] !== arr[l]) {
//       return false;
//     }
//   }
//   return true;
// };

// Do not edit below this line
module.exports = palindromes;
