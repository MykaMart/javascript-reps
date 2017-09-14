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