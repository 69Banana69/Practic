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
    removeButton: document.querySelectorAll(".delete-button"),
  };
  render();
  removeItem();
  selectItem();
}
init();

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
  btns.forEach((btn) => btn.removeEventListener("click", selectItem));
  function removeItems() {
    let colors = itemsArray.map((el) => el.color);
    let index = colors.indexOf(`${this.parentNode.id}`);
    itemsArray.splice(index, 1);
    this.parentNode.remove();
  }
}

function selectItem() {
  let item = document.querySelectorAll(".item");
  let btns = document.querySelectorAll(".delete-button");

  item.forEach((items) => items.addEventListener("click", selectItems));
  btns.forEach((btn) =>
    btn.addEventListener("click", function selectBtn(event) {
      event.stopPropagation();
    })
  );
  function selectItems() {
    document.querySelector(".header").style.backgroundColor =
      this.style.backgroundColor;
    document.querySelector(".header").style.color =
      this.firstChild.style.color;
  }
}

