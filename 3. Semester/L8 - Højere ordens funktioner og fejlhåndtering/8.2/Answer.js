







// Functions
function compareSort(sortMethod){
    return function(arr) {
        arr.sort(sortMethod);
    }
}