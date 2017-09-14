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

// Round 4

const wordReverse = (thisString) => {

	const revString = thisString.split(" ").reverse().join(" ");

	return revString;
}

// Round 5

const letterReverse = (thatString) => {

	const arrStrings = thatString.split(" ");

	for (i = 0; i <= arrStrings.length - 1; i++) {
		arrStrings[i] = arrStrings[i].split("").reverse().join("");
	}

	const revWords = arrStrings.join(" ");

	return revWords;
};

// Round 6

const longest = (arrOfStrings) =>{ 
	
	arrOfStrings = arrOfStrings.sort(function(a, b){

		return a.length - b.length;
	});

	return arrOfStrings[arrOfStrings.length - 1];
};

// Final Round

const pirateSpeak = (landLubberString) => {

	pirateString = landLubberString.replace(/r/g, "Arrrrrr")

	return pirateString

}

const repMaster = (input, iFunction) => {

	return iFunction(input) + " proves that I am the rep MISTRESS!"

}


repMaster("red leather, yellow leather", pirateSpeak)






