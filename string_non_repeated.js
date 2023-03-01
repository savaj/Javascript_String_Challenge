const getRepeatedChars = (str) => {
 	const chars = {};
    for (const char of str) {
        chars[char] = (chars[char] || 0) + 1;
    }
    const data = Object.entries(chars).filter(char => char[1] <= 1 && char[0] !== ' ')
    console.log(data);
}

getRepeatedChars("Hello World");
