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
}
init();

function render() {
  // <div class="item">
  //   <div class="item" style="background-color: blue;">
  //     <span class="item-text" style="color: white;">
  //       white
  //     </span>
  //     <button class="delete-button">X</button>
  //   </div>
  //   <div class="item" style="background-color: yellow;">
  //     <span class="item-text" style="color: black;">
  //       black
  //     </span>
  //     <button class="delete-button">X</button>
  //   </div>
  // </div>

  for (let i=0; i<itemsArray.length; i++) {
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
