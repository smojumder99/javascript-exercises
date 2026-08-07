const fibonacci = function(fibIndex) {
fibIndex=Number(fibIndex);
if(fibIndex<0)
    return "OOPS";
if (fibIndex===0)
    return 0;
if ((fibIndex===1) || (fibIndex===2))
    return 1;

let arr=[];
for (let i=1;i<=fibIndex;i++){
    if((i===1)||(i===2)){
        arr[i]=1;
        continue;
    }
arr[i]= (arr[i-1])+(arr[i-2]);

}
return arr[arr.length-1];

};

// Do not edit below this line
module.exports = fibonacci;
