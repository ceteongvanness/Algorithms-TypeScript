interface CharCounts{
	[key: string]: number;
}

type Bounds = [number, number];

export function smallestSubstringContaining(bigString: string, smallString: string) {
  const targetCharCounts = getCharCounts(smallString);
	const substringBounds = getSubstringBounds(bigString, targetCharCounts);
	return getStringFromBounds(bigString, substringBounds);
}

function getCharCounts(string: string){
	const charCounts: CharCounts = {};
	for (const char of string){
		increaseCharCount(char, charCounts);
	}
	return charCounts;
}

function getSubstringBounds(string: string, targetCharCounts: CharCounts){
	let substringBounds: Bounds = [0, Infinity];
	const substringCharCounts: CharCounts = {};
	const numUniqueChars = Object.keys(targetCharCounts).length;
	let numUniqueCharsDone = 0;
	let leftIdx = 0;
	let rightIdx = 0;
	while (rightIdx < string.length){
		const rightChar = string[rightIdx];
		if (!(rightChar in targetCharCounts)){
			rightIdx++;
			continue;
		}
		increaseCharCount(rightChar, substringCharCounts);
		if(substringCharCounts[rightChar] === targetCharCounts[rightChar]){
			numUniqueCharsDone++;
		}
		while (numUniqueCharsDone === numUniqueChars && leftIdx <= rightIdx){
			substringBounds = getCloserBounds(leftIdx, rightIdx, substringBounds[0], substringBounds[1]);
			const leftChar = string[leftIdx];
			if(!(leftChar in targetCharCounts)){
				leftIdx++;
				continue;
			}
			if (substringCharCounts[leftChar] === targetCharCounts[leftChar]){
				numUniqueCharsDone--;
			}
			decreaseCharCount(leftChar, substringCharCounts);
			leftIdx++;
		}
		rightIdx++;
	}
	return substringBounds;
}

function getCloserBounds(idx1: number, idx2: number, idx3: number, idx4: number): Bounds{
	return idx2 - idx1 < idx4 - idx3 ? [idx1, idx2] : [idx3, idx4];
}

function getStringFromBounds(string: string, bounds: Bounds){
	const [start, end] = bounds;
	if (end === Infinity) return '';
	return string.slice(start, end + 1);
}

function increaseCharCount(char: string, charCounts: CharCounts){
	charCounts[char] = (charCounts[char] || 0) + 1;
}

function decreaseCharCount(char: string, charCounts: CharCounts){
	charCounts[char]--;
}


  
  