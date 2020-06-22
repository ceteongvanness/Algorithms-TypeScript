interface Item{
	arrayIdx: number;
	num: number;
}

export function mergeSortedArrays(arrays: number[][]) {
  const sortedList: number[] = [];
	const elementIdxs = arrays.map(() => 0);
	while(true){
		const smallestItems: Item[] = [];
		for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++){
			const relevantArray = arrays[arrayIdx];
			const elementIdx = elementIdxs[arrayIdx];
			if(elementIdx === relevantArray.length) continue;
			smallestItems.push({
				arrayIdx,
				num: relevantArray[elementIdx],
			});
		}
		if(smallestItems.length === 0) break;
		const nextItem = getMinValue(smallestItems);
		sortedList.push(nextItem.num);
		elementIdxs[nextItem.arrayIdx]++;
	}
	return sortedList;
}

function getMinValue(items: Item[]){
	let minValueIdx = 0;
	for (let i = 1; i < items.length; i++){
		if(items[i].num < items[minValueIdx].num) minValueIdx = i;
	}
	return items[minValueIdx];
}

  
  