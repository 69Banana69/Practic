let audience = {
  number: 57,
  furniture: ["table"],
  flower: 5,

  board: {
    material: "Wood",
    size: "100x200",
  },
  floor: "Wood",
  computer: true,
  wall: "concrete",
  changeBoardSize: () => {
    this.board;
    alert(this.board);
  },
  addFurniture: function () {
    this.furniture.push(document.getElementById("furniture").value);
    document.getElementById("func1").textContent = this.furniture;
  },
  changeAudience: function () {
    this.number = document.getElementById("number").value;
    alert(`Audience number is ${this.number}`);
  },
  addComputer() {
    this.computer = document.getElementById("check").checked
      ? "avaible"
      : "Not avaible";
    document.getElementById("computer").textContent = this.computer;
  },
};

audience.showFlower = function () {
  document.getElementById("flower").textContent = audience.flower;
};

audience.addFlower = function () {
  document.getElementById("flower").textContent = ++audience.flower;
};

audience.removeFlower = function () {
  document.getElementById("flower").textContent = --audience.flower;
};
