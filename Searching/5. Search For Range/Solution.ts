type Range = [number, number];

export function searchForRange(array: number[], target: number){
  const finalRange: Range = [-1, -1];
	alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
	alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
	return finalRange;
}

function alteredBinarySearch(
	array: number[],
	target: number,
	left: number,
	right: number,
	finalRange: Range,
	goLeft: boolean,
){
	if (left > right) return;
	const mid = Math.floor((left + right) / 2);
	if (array[mid] < target){
		alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
	} else if (array[mid] > target){
		alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
	} else {
		if (goLeft){
			if (mid === 0 || array[mid - 1] !== target){
				finalRange[0] = mid;
			} else {
				alteredBinarySearch(array, target, left, mid - 1, finalRange, goLeft);
			}
		} else {
			if (mid === array.length - 1 || array[mid + 1] !== target){
				finalRange[1] = mid;
			} else {
				alteredBinarySearch(array, target, mid + 1, right, finalRange, goLeft);
			}
		}
	}
}