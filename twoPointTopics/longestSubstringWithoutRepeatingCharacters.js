/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let left = 0;
    let right = 0;
    let maxSubstringLength = 0;

    while(right < s.length) {
        if(!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++;
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    return maxSubstringLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));

// Given a string s, find the length of the longest substring without repeating characters.

