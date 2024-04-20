/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    for (const char of ransomNote) {
        const charIndex= magazine.indexOf(char);
        if(charIndex !== -1) {
            magazine = magazine.substring(0,charIndex)+ magazine.substring(charIndex + 1);
        }
            else {
                return false;
            }
        
    }
    return true;
};