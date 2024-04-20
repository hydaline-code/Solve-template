/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // Find the lengths of the strings
    const len1 = str1.length;
    const len2 = str2.length;

    // Find the GCD of the lengths
    const lengthGCD = gcd(len1, len2);

    // Extract substring from str1 using the GCD length
    const substring = str1.substring(0, lengthGCD);

    // Check if repeating the substring forms both strings
    if (substring.repeat(len1 / lengthGCD) === str1 && substring.repeat(len2 / lengthGCD) === str2) {
        return substring;
    } else {
        return "";
    }
};