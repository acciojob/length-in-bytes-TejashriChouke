const byteSize = (str) => {
  // write your code here
	 let byteSize = 0;
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Get the Unicode code point of the character
        const codePoint = str.charCodeAt(i);
        
        // Increment byte size based on the number of bytes required to encode the character
        byteSize += (codePoint < 128) ? 1 : (codePoint < 2048) ? 2 : (codePoint < 65536) ? 3 : 4;
    }
    
    // Return the total byte size of the string
    return byteSize;
}


// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
