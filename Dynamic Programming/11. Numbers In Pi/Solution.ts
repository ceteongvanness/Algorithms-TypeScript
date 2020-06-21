interface NumbersTable{
	[key: string]: boolean;
}

interface Cache{
	[key: number]: number;
}
export function numbersInPi(pi: string, numbers: string[]) {
  const numbersTable: NumbersTable = {};
	for (const number of numbers){
		numbersTable[number] = true;
	}
	const minSpaces = getMinSpaces(pi, numbersTable, {}, 0);
	return minSpaces === Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi: string, numbersTable: NumbersTable, cache: Cache, idx: number){
	if(idx === pi.length) return -1;
	if (idx in cache) return cache[idx];
	let minSpaces = Infinity;
	for (let i = idx; i < pi.length; i++){
		const prefix = pi.slice(idx, i + 1);
		if(prefix in numbersTable){
			const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
			minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
		}
	}
	cache[idx] = minSpaces;
	return cache[idx];
}