const timeConstants = require("./timeConstants")
class utils {

    /**
     * Waiting/Sleep time
     *
     */
    async waitShorTime() {
        await new Promise(resolve => setTimeout(resolve, timeConstants.SHORT_TIME));
    }

    /**
     * Waiting/Sleep time
     *
     */
    async waitLongTime() {
        await new Promise(resolve => setTimeout(resolve, timeConstants.MEDIUM_TIME));

    }

    /**
     * Waiting/Sleep time
     *
     */
    async waitLongTime() {
        await new Promise(resolve => setTimeout(resolve, timeConstants.LONG_TIME));

    }

    /**
     * Split string following demand
     *
     * @param  {str}  str: string text
     * @param {text} string: split this string 
     * @param {no} arr: array number that would be taken
     * @returns {getText} str: string
     */
    async splitString(str, text, no) {
        const splitedText = str.split(text);

        const getText = splitedText[no];
        return getText.trim()

    }

    /**
     * Filters an array of objects using custom predicates.
     *
     * @param  {str}  str: string text
     * @param {arr} arr: return array data
     */
    formatStringWithNoSpace(str) {
        return str.replace(/\s/g, '');
    }

    /**
     * Filters an array of objects using custom predicates.
     *
     * @param  {str}  str: string text
     * @return {replaceText} str: data from UI
     */
    formatStringWithNoSpaceAndLowerText(str) {
        const replaceText = this.formatStringWithNoSpace(str).toLowerCase()
        return replaceText
    }

}
module.exports = utils