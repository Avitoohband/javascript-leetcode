var haystack = "sadbutsad";
var needle = "sad";

var strStr = function(haystack, needle) {
    
    if (needle.length > haystack.length) return -1;

    for (let haystackIndex = 0; haystackIndex <= haystack.length - needle.length; haystackIndex++) {
        let needleIndex = 0;
        while (needleIndex < needle.length && haystack[haystackIndex + needleIndex] === needle[needleIndex]) {
            needleIndex++;
        }
        if (needleIndex === needle.length) {
            return haystackIndex
        }
    }

    return -1;
};