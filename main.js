let htmlElements;

let itemsArray = [
  { color: "white", bgColor: "blue" },
  {
    color: "black",
    bgColor: "yellow",
  },
  {
    color: "green",
    bgColor: "whitesmoke",
  },
];

function init() {
  htmlElements = {
    bgColorInput: document.querySelector("input.bg-color-input"),
    textColorInput: document.querySelector("input.text-color-input"),
    addButton: document.querySelector("button.add-button"),
    items: document.querySelector("div.items"),
  };
  render();
  removeItem();
  selectItem();
}
init();

htmlElements.bgColorInput.onblur = function () {
  if (checkIfColorCanBeAdded(this.value) != true) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
};

htmlElements.textColorInput.onblur = function () {
  if (checkIfColorCanBeAdded(this.value) != true) {
    this.classList.add("error");
  } else {
    this.classList.remove("error");
  }
};

htmlElements.addButton.addEventListener("click", buttonValid);

function buttonValid() {
  let colors = itemsArray.map((el) => el.color);
  let bgColors = itemsArray.map((el) => el.bgColor);
  if (
    colors.includes(`${htmlElements.textColorInput.value}`) ||
    htmlElements.textColorInput.value === "" ||
    bgColors.includes(`${htmlElements.bgColorInput.value}`) ||
    htmlElements.bgColorInput.value === ""
  ) {
    alert("Такой цвет уже есть");
    htmlElements.bgColorInput.classList.add("error");
    htmlElements.textColorInput.classList.add("error");
  } else {
    if (
      checkIfColorCanBeAdded(`${htmlElements.textColorInput.value}`) != true ||
      checkIfColorCanBeAdded(`${htmlElements.bgColorInput.value}`) != true
    ) {
      alert("Такого цвета не существует");
    } else {
      addItem();
    }
  }
}

function checkIfColorCanBeAdded(color) {
  if (color.indexOf("rgb") > -1 || color === "") {
    return false;
  }

  let div = document.createElement("div");
  div.style.backgroundColor = color;
  let colorIsSetCorrectly = div.style.backgroundColor === color;
  return colorIsSetCorrectly;
}

function render() {
  for (let i = 0; i < itemsArray.length; i++) {
    let div = document.createElement("div");
    div.className = "item";
    div.style.backgroundColor = itemsArray[i].bgColor;
    div.id = itemsArray[i].color;
    itms.append(div);

    let span = document.createElement("span");
    span.className = "item-text";
    span.style.color = itemsArray[i].color;
    span.textContent = `${itemsArray[i].color}`;
    div.append(span);

    let btn = document.createElement("button");
    btn.className = "delete-button";
    btn.textContent = "X";
    div.appendChild(btn);
  }
}

function removeItem() {
  let btns = document.querySelectorAll(".delete-button");
  btns.forEach((btn) => btn.addEventListener("click", removeItems));
}
function removeItems(event) {
  let colors = itemsArray.map((el) => el.color);
  let index = colors.indexOf(`${this.parentNode.id}`);
  event.stopPropagation();

  itemsArray.splice(index, 1);
  this.parentNode.remove();
}


function selectItem() {
  let item = document.querySelectorAll(".item");

  item.forEach((items) => items.addEventListener("click", selectItems));

  function selectItems() {
    document.querySelector(".header").style.backgroundColor =
      this.style.backgroundColor;
    document.querySelector(".header").style.color = this.firstChild.style.color;
  }
}

function addItem() {
  itemsArray.push({
    color: htmlElements.textColorInput.value,
    bgColor: htmlElements.bgColorInput.value,
  });
  lastChild = itemsArray.slice(-1);
  let div = document.createElement("div");
  div.className = "item";
  div.id = lastChild[0].color;
  div.style.backgroundColor = lastChild[0].bgColor;
  itms.append(div);

  let span = document.createElement("span");
  span.className = "item-text";
  span.style.color = lastChild[0].color;
  span.textContent = `${lastChild[0].color}`;
  div.append(span);

  let btn = document.createElement("button");
  btn.className = "delete-button";
  btn.textContent = "X";
  div.appendChild(btn);
  removeItem();
  selectItem();
}
