let inventory = [];

function addItemToInventory(item) {
  if (inventory.length >= 20) return console.log("Inventário cheio");
  inventory.push(item);
  updateInventory();
}

function removeItemFromInventory(item) {
  let itemRemoved = false;
  inventory = inventory.filter((itemInSlot) => {
    if (itemRemoved) return true;
    if (itemInSlot === item) {
      itemRemoved = true;
      return false;
    }
    return itemInSlot != item;
  });
  if (!itemRemoved) return console.log("Item não está no inventário");
  updateInventory();
}

function clearInventory() {
  console.log("clear");
  inventory = [];
  updateInventory();
}

function addBtnClicked() {
  const item = document.getElementById("addItem").querySelector("input").value;
  addItemToInventory(item);
}

function removeBtnClicked() {
  const item = document
    .getElementById("removeItem")
    .querySelector("input").value;
  removeItemFromInventory(item);
}

function updateInventory() {
  const slots = document.getElementsByClassName("slot");
  for (let i = 0; i < slots.length; i++) {
    slots[i].className = "slot";
    slots[i].innerHTML = "";
  }
  inventory.map((item, idx) => {
    slots[idx].innerHTML = `<span>${item}</span>`;
    slots[idx].className = `slot filled`;
  });
}
