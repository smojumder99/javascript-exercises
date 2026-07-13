const removeFromArray = function (arr, ...elementsToRemove) {
    for (let i = arr.length-1; i >= 0; i--) {
        for (let j = 0; j < elementsToRemove.length; j++) {
            if (arr[i] === elementsToRemove[j])
                arr.splice(i, 1)
        }
    }
    return arr;
};


// Do not edit below this line
module.exports = removeFromArray;
