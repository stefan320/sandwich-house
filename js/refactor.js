var itemSelect = document.querySelectorAll("select");
var checkboxContainer = document.querySelector(".checkbox-container");
var checkBoxes = document.getElementsByClassName("checkbox");
var addSandwich = document.getElementById("add-sandwich");
var fieldset = document.querySelector(".checkbox-container fieldset");
var ingredients = [];
var ingredientsPrice = [];
var ingredientsInfo;
var orders = [];
var choiceInfo = [];

var Order = function(bread, ingredients, sauces, sideDishes, drink, toasted) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.sauces = sauces;
  this.sideDishes = sideDishes;
  this.drink = drink;
  this.toasted = toasted;
};

Order.prototype.calcBill = function() {
  console.log(this.bread.price);
};

var choiceIndex; //The index of the selected item from select menu
function choiceData(item, attr) {
  choiceIndex = item.options.selectedIndex;
  return item.options[choiceIndex].getAttribute(attr); //returns the value of the selected item attribute
}

for (let i = 0; i < checkBoxes.length; i++) {
  //add event listener to check boxes
  checkBoxes[i].addEventListener("change", pushIngredient);
}

function pushIngredient() {
  if (event.target.checked) {
    //push the name of ingredient to ingredients array
    ingredients.push(event.target.name);
    //push the ingredient price to ingredientsPrice array
    ingredientsPrice.push(event.target.value);
  } else if (event.target.checked === false) {
    //find the index of the unchecked item from ingredients array
    var index = ingredients.indexOf(event.target.name);
    //remove it and its price from their arrays
    ingredients.splice(index, 1);
    ingredientsPrice.splice(index, 1);
  }
}

function newOrder() {
  orders.push(
    new Order(
      [
        choiceData(itemSelect[0], ["value"]),
        choiceData(itemSelect[0], ["data-price"])
      ],
      ingredientsInfo,
      [
        choiceData(itemSelect[1], ["value"]),
        choiceData(itemSelect[1], ["data-price"])
      ],
      [
        choiceData(itemSelect[2], ["value"]),
        choiceData(itemSelect[2], ["data-price"])
      ],
      [
        choiceData(itemSelect[3], ["value"]),
        choiceData(itemSelect[3], ["data-price"])
      ],
      [
        choiceData(itemSelect[4], ["value"]),
        choiceData(itemSelect[4], ["data-price"])
      ]
    )
  );
}
function resetMenus(el) {
  for (var i = 0; i < el.length; i++) {
    el[i].options.selectedIndex = "0";
  }
}
function resetCheckBoxes(el) {
  for (var i = 0; i < el.length; i++) {
    el[i].checked = false;
  }
}
function resetApp() {
  resetMenus(itemSelect);
  resetCheckBoxes(checkBoxes);
  choiceInfo = []; // reset choice info array
  ingredients = [];
  ingredientsPrice = [];
}

// adds a new order  when the plus icon is clicked
addSandwich.addEventListener("click", function() {
  newOrder();
  resetApp();
});

checkboxContainer.addEventListener("click", function(event) {
  if (
    event.target.className !== "checkbox" &&
    event.target.className !== "checkbox-div" &&
    event.target.className !== "label"
  ) {
    fieldset.classList.toggle("hidden");
  }
});
