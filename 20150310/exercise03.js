//3a, write a function that given a word return it capitalized
function capitalize(word) {
	return word.substring(0,1).toUpperCase() + word.substring(1);
}

capitalize("andrea");

//3b, write a function that capitalize each word of the following text:
//"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
var text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

function capitalizeEach(text) {
	var textCap;
	var splittedText;
	splittedText = text.split(" ");
	for (word in splittedText) {
		textCap += word.capitalize(word);
	};
	return textCap;
}

capitalizeEach(text);
