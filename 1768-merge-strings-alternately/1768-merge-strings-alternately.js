/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergeString = "";
    let minLength = Math.min(word1.length, word2.length);
    
    for (let i = 0; i < minLength; i++) {
        mergeString += word1[i] + word2[i];
    }
    
    // Append surplus characters from the longer word
    mergeString += word1.substring(minLength) + word2.substring(minLength);

    return mergeString;
};