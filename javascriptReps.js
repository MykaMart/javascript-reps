// Round 1

const lengths = (arrStrings) => {

	const arrLengths = [];
	for (let i = 0; i <= arrStrings.length -1; i++) {
		console.log(arrStrings[i].length);
		arrLengths.push(arrStrings[i].length);
	}
	return arrLengths;
}

lengths(["humble", "bundle", "bundlestars", "gog"])

// Round 2

const transmogrfier = (num1, num2, num3) => {

	const transmogrified = Math.pow((num1 *num2), num3);

	return transmogrified;
};

// Round 3

const toonify = (accent, sentence) => {

	let newSentence = ""

	if (accent = "daffy") {
			newSentence = sentence.replace(/s/g, "th");
	} else if (accent = "elmer") {
			newSentence = sentence.replace(/r/g, "w");
	};

	return newSentence
};




