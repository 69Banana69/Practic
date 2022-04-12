let audience = {
  number: 57,
  changeNumber: function () {
    number = 22;
    return number;
  },
  board: {
    material: "Wood",
    size: "100x200",
  },
  changeBoardSize: () => {
    board.size = "100x50";
    return board.size;
  },

  floor: "Wood",
  changeFloor() {
    floor = "concrete";
    return floor;
  },
  wall: "concrete",
};

audience.fullBoard = function () {
  return `${board.material} ${board.size}`;
};
