interface StringChains{
	[key: string]:{
		nextString: string;
		maxChainLength: number;
	};
}

export function longestStringChain(strings: string[]) {
  const stringChains: StringChains = {};
	for (const string of strings){
		stringChains[string] = {nextString:'', maxChainLength: 1};
	}
	
	const sortedStrings = strings.sort((a, b) => a.length - b.length);
	for (const string of sortedStrings){
		findLongestStringChain(string, stringChains);
	}
	
	return buildLongestStringChain(strings, stringChains);
}

function findLongestStringChain(string: string, stringChains: StringChains){
	for (let i = 0; i < string.length; i++){
		const smallerString = getSmallerString(string, i);
		if (!(smallerString in stringChains)) continue;
		tryUpdateLongestStringChain(string, smallerString, stringChains);
	}
}

function getSmallerString(string: string, index: number){
	return string.slice(0, index) + string.slice(index + 1);
}

function tryUpdateLongestStringChain(currentString: string, smallerString: string, stringChains: StringChains){
	const smallerStringChainLength = stringChains[smallerString].maxChainLength;
	const currentStringChainLength = stringChains[currentString].maxChainLength;
	
	if(smallerStringChainLength + 1 > currentStringChainLength){
		stringChains[currentString].maxChainLength = smallerStringChainLength + 1;
		stringChains[currentString].nextString = smallerString;
	}
}

function buildLongestStringChain(strings: string[], stringChains: StringChains){
	let maxChainLength = 0;
	let chainStartingString = '';
	for (const string of strings){
		if (stringChains[string].maxChainLength > maxChainLength){
			maxChainLength = stringChains[string].maxChainLength;
			chainStartingString = string;
		}
	}
	
	const ourLongestStringChain: string[] = [];
	let currentString = chainStartingString;
	while (currentString !== ''){
		ourLongestStringChain.push(currentString);
		currentString = stringChains[currentString].nextString;
	}
	
	return ourLongestStringChain.length === 1 ? [] : ourLongestStringChain;
}

  
  