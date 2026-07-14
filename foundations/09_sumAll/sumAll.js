const sumAll = function(num1, num2) {


if ((!Number.isInteger(num1) || num1 <= 0)|| ((!Number.isInteger(num2) || num2 <= 0))) {
    return 'ERROR';
  }


let smallNum=num1;
let bigNum=num2;

if(num1>num2){
    smallNum=num2;
    bigNum=num1;
}
     
let arr=[];
let j=smallNum;
for (let i=0;i<=bigNum-smallNum;i++){
    arr[i]=j;
    j++;
}
return arr.reduce((sum,current)=>sum+current,0);



};


// const sumAll = function(num1, num2) {
//   if (!Number.isInteger(num1) || num1 <= 0 || !Number.isInteger(num2) || num2 <= 0) {
//     return 'ERROR';
//   }

//   let smallNum = num1;
//   let bigNum = num2;

//   if (num1 > num2) {
//     smallNum = num2;
//     bigNum = num1;
//   }

//   let arr = [];
  
//   // Loop directly from the small number to the big number
//   for (let i = smallNum; i <= bigNum; i++) {
//     arr.push(i); 
//   }

//   return arr.reduce((sum, current) => sum + current, 0);
// };


// Do not edit below this line
module.exports = sumAll;
