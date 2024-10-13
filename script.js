function addItem() {
  const addButton = document.getElementById("grocery-button");
  const groceryItemInput = document.getElementById("grocery-input");
  const groceryList = document.getElementById("grocery-add");

  addButton.addEventListener("click", (Enter) => {
    Enter.preventDefault();
    const item = groceryItemInput.value.trim();
    if (item) {
      const groceryItem = document.createElement("li");
      groceryItem.textContent = item;
      groceryList.appendChild(groceryItem);
      groceryItemInput.value = "";

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.classList.add("delete-btn");
      deleteButton.addEventListener("click", () => {
        groceryItem.remove();
      });
      groceryItem.appendChild(deleteButton);
    }
  });
}
addItem();
