type Coord = [number, number];

enum Direction{
	Up,
	Right,
	Down,
}

interface CoordsTable{
	x: {
		[key: number]: Coord[];
	};
	y: {
		[key: number]: Coord[];
	};
}

export function rectangleMania(coords: Coord[]) {
  const coordsTable = getCoordsTable(coords);
	return getRectangleCount(coords, coordsTable);
}

function getCoordsTable(coords: Coord[]){
	const coordsTable: CoordsTable = {x: {}, y: {}};
	for (const coord of coords){
		const [x, y] = coord;
		coordsTable.x[x] = coordsTable.x[x] || [];
		coordsTable.x[x].push(coord);
		coordsTable.y[y] = coordsTable.y[y] || [];
		coordsTable.y[y].push(coord);
	}
	return coordsTable;
}

function getRectangleCount(coords: Coord[], coordsTable: CoordsTable){
	let rectangleCount = 0;
	for (const coord of coords){
		const lowerLeftY = coord[1];
		rectangleCount += clockwiseCountRectangles(coord, coordsTable, Direction.Up, lowerLeftY);
	}
	return rectangleCount;
}

function clockwiseCountRectangles(coord1: Coord, coordsTable: CoordsTable, direction: Direction, lowerLeftY: number){
	const [x1, y1] = coord1;
	if (direction === Direction.Down){
		const relevantCoords = coordsTable.x[x1];
		for (const coord2 of relevantCoords){
			const lowerRightY = coord2[1];
			if (lowerRightY === lowerLeftY) return 1;
		}
		return 0;
	} else {
		let rectangleCount = 0;
		if (direction === Direction.Up){
			const relevantCoords = coordsTable.x[x1];
			for (const coord2 of relevantCoords){
				const y2 = coord2[1];
				const isAbove = y2 > y1;
				if (isAbove) rectangleCount += clockwiseCountRectangles(coord2, coordsTable, Direction.Right, lowerLeftY);
			}
		} else if (direction == Direction.Right){
			const relevantCoords = coordsTable.y[y1];
			for (const coord2 of relevantCoords){
				const x2 = coord2[0];
				const isRight = x2 > x1;
				if (isRight) rectangleCount += clockwiseCountRectangles(coord2, coordsTable, Direction.Down, lowerLeftY);
			}
		}
		return rectangleCount;
	}
}

  
  
  