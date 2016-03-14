//accept an array and return the longest word in the array; 
//print "There was a tie!" if the array contains multiple longest words
function findLongestWord(arr) {
    var longest;
    var charCount = 0;
    var numChar;
    for (i=0; i<arr.length; i++) {
        numChar = arr[i].length;
        if (numChar > charCount) {
            charCount = arr[i].length;
            longest = arr[i];
        } else if (numChar === charCount) {
            longest = "There was a tie!";
        }
    }
    return longest;
}

//create sample arrays
var arr1 = ["hello", "bye", "farewell"];
var arr2 = ["eye", "bye"];
var arr3 = ["hopeful", "eye", "bye"]
var arr4 = ["so long", "hello", "mississippi"];

//prints longest word from each sample array
console.log(findLongestWord(arr1));
console.log(findLongestWord(arr2));
console.log(findLongestWord(arr3));
console.log(findLongestWord(arr4));
