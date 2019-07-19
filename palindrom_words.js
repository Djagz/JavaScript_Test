// Palidromes: Words that read the same forwards and backwards
// Examples: dad, radar, taco cat
//
// Write a function that takes a string as an argument,
// and returns true if the string is a palindrome,
// and returns false if the string is not a palindrome
// Letter case and spaces should be disregarded

// isPalindrome('mom');	Should return true
// isPalindrome('something'); Should return false
// isPalindrome('TacO cAt'); Should return true

const isPalindrome = (word) => {
	let reversedWord = ""

	word = word.replace(/\s/g, '')
	word = word.toLowerCase()
	for(let i = word.length-1; i>=0; i--){
			reversedWord += word[i]
	}
	return reversedWord===word? true: false
}

