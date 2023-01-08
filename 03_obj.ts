type pointType = {
  x: number;
  y: number;
};

const printCoordinate = (point: pointType) => {
  console.log("x:", point.x);
  console.log("y:", point.y);
};

// printCoordinate(123);
printCoordinate({ x: 20, y: 30 });
