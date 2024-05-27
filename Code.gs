/**
 * Converts amount to words.
 *
 * @param {number} amount to be converted.
 * @return {string}  amount in words.
 * @customfunction
 */
function AMT2WORDS(amount) {
  // Arrays for number to words conversion
  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  const thousands = ["", "Thousand", "Million", "Billion"];

  // Function to convert a number less than 1000 to words
  const convertHundreds = (num) => {
    let str = "";
    if (num > 99) {
      str += ones[Math.floor(num / 100)] + " Hundred ";
      num %= 100;
    }
    if (num > 19) {
      str += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }
    str += ones[num];
    return str.trim();
  };

  // Main function to convert a number to words
  const convertToWords = (num) => {
    if (num === 0) return "Zero";

    const numStr = num.toString();
    const parts = numStr.split(".");
    let integerPart = parseInt(parts[0]);
    const decimalPart = parts[1] ? parseInt(parts[1]) : 0;

    let wordStr = "";
    let place = 0;

    while (integerPart > 0) {
      const n = integerPart % 1000;
      if (n !== 0) {
        const s = convertHundreds(n);
        wordStr = s + (thousands[place] ? " " + thousands[place] : "") + " " + wordStr;
      }
      place++;
      integerPart = Math.floor(integerPart / 1000);
    }

    wordStr = wordStr.trim();
    if (parts.length > 1) {
      return wordStr + " And " + decimalPart + "/100";
    } else {
      return wordStr + " Only";
    }
  };

  return convertToWords(amount);
}
