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
    removeButton: document.querySelectorAll("button.delete-button"),
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
  function removeItems() {
    this.parentNode.remove();

    render();
  }
}

function selectItem() {
  let item = document.querySelectorAll(".item");

  item.forEach((items) => items.addEventListener("click", selectItems));
  function selectItems() {
    window.getSelection().selectAllChildren(this);
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
}
