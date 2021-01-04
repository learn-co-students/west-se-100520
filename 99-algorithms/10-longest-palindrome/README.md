https://leetcode.com/problems/longest-palindrome/

alec's

```javascript
const str = "abccccdd"
var longestPalindrome = function(s) {
    // count all dups
    let strLength = s.length
    let dict = {}
    let dups = 0
    for (let i=0; i<s.length; i++) {
        let curr = s[i]
        if (dict[curr]) {
            dups++
            dict[curr] = false
        } else {
            dict[curr] = true
        }
        console.log(dups, dict)
    }
    if (strLength === (dups * 2)) return dups * 2
    else return dups * 2 + 1
};
console.log(longestPalindrome(str))
```