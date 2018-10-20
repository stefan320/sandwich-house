var selectBread = document.querySelectorAll(".bread-select");
var sauceSelect = document.querySelectorAll(".sauces-select");
var itemSelect = document.querySelectorAll("select");
var option = document.querySelectorAll("option");
var checkboxContainer = document.querySelector(".checkbox-container");
var fieldset = document.querySelector(".checkbox-container fieldset");
var addSandwich = document.getElementById("add-sandwich");
var orderDetails = document.getElementById("order-details");
var checkBoxes = document.getElementsByClassName("checkbox");
var printBill = document.getElementById("print-bill");

var selectItemsValue = {};
var currentOrder = {};
var ingredients = [];
var ingredientsPrice = [];
let ingredientsTotal = 0;
let orderTotal = 0;
var fullOrder = [];
let i = 0; //current sandwich number

function createSandwich() {
  var index = [];

  for (var i = 0; i < itemSelect.length; i++) {
    index.push(itemSelect[i].options.selectedIndex);
  }

  currentOrder.setValues = function() {
    this.bread = itemSelect[1].value;
    this.breadPrice = itemSelect[0].options[index[0]].getAttribute(
      "data-price"
    );
    this.sauce = itemSelect[1].value;
    this.saucePrice = itemSelect[1].options[index[1]].getAttribute(
      "data-price"
    );
    this.side = itemSelect[2].value;
    this.sidePrice = itemSelect[2].options[index[2]].getAttribute("data-price");
    this.drink = itemSelect[3].value;
    this.drinkPrice = itemSelect[3].options[index[3]].getAttribute(
      "data-price"
    );
    this.toasted = itemSelect[4].value;
    this.toastedPrice = itemSelect[4].options[index[4]].getAttribute(
      "data-price"
    );
    console.log(this);
  };

  // currentOrder.bread = itemSelect[0].value;
  // currentOrder.breadPrice = itemSelect[0].options[index[0]].getAttribute(
  //   "data-price"
  // );
  // currentOrder.sauce = itemSelect[1].value;
  // currentOrder.saucePrice = itemSelect[1].options[index[1]].getAttribute(
  //   "data-price"
  // );
  // currentOrder.side = itemSelect[2].value;
  // currentOrder.sidePrice = itemSelect[2].options[index[2]].getAttribute(
  //   "data-price"
  // );
  // currentOrder.drink = itemSelect[3].value;
  // currentOrder.drinkPrice = itemSelect[3].options[index[3]].getAttribute(
  //   "data-price"
  // );
  // currentOrder.toasted = itemSelect[4].value;
  // currentOrder.toastedPrice = itemSelect[4].options[index[4]].getAttribute(
  //   "data-price"
  // );

  ingredientsTotal = 0; //reset the total cost of ingredients

  for (let x = 0; x < ingredients.length; x++) {
    ingredientsTotal += Math.abs(ingredientsPrice[x]);
    // loop through ingredients and add them to the bill
  }
  currentOrder.fullPrice =
    Math.abs(currentOrder.breadPrice) +
    ingredientsTotal +
    Math.abs(currentOrder.saucePrice) +
    Math.abs(currentOrder.sidePrice) +
    Math.abs(currentOrder.drinkPrice) +
    Math.abs(currentOrder.toastedPrice);
  orderTotal += currentOrder.fullPrice;
  fullOrder.push(currentOrder);
}
/////////////////////
/////////////////////
// Checkbox Select///
/////////////////////
/////////////////////

checkboxContainer.addEventListener("click", function() {
  if (
    event.target.className !== "checkbox" &&
    event.target.className !== "checkbox-div" &&
    event.target.className !== "label"
  ) {
    fieldset.classList.toggle("hidden");
  }
});

///////////////////
///ADD SANDWICH///
/////////////////

// Now

function printSandwich() {
  var a =
    "<dt class='item'>" +
    ingredients[0] +
    "</dt>" +
    "<dd class='price'>" +
    ingredientsPrice[0] +
    "</dd>";

  for (let x = 1; x < ingredients.length; x++) {
    a +=
      "<dt class='item'>" +
      ingredients[x] +
      "</dt>" +
      "<dd class='price'>" +
      ingredientsPrice[x] +
      "</dd>";
  }
  if (fullOrder[i].bread === "No selection" || ingredients.length < 2) {
    alert(
      "Invalid order please make sure you have selected a bread type and at least two ingredients."
    );
  } else
    orderDetails.innerHTML +=
      "<div class='row'>" +
      "<img class='bread-cart' src='../icons/bread.svg' alt='Sandwich icon'>" +
      "<h2 class='sandwich-header'>Sandwich " +
      (i + 1) +
      "</h2>" +
      "<dl>" +
      "<dt class='item'>" +
      fullOrder[i].bread +
      "</dt>" +
      "<dd class='price'>" +
      fullOrder[i].breadPrice +
      "</dd>" +
      a + //ingredient and price
      "<dt class='item'>" +
      fullOrder[i].sauce +
      "</dt>" +
      "<dd class='price'>" +
      fullOrder[i].saucePrice +
      "</dd>" +
      "<dt class='item'>" +
      fullOrder[i].side +
      "</dt>" +
      "<dd class='price'>" +
      fullOrder[i].sidePrice +
      "</dd>" +
      "<dt class='item'>" +
      fullOrder[i].drink +
      "</dt>" +
      "<dd class='price'>" +
      fullOrder[i].drinkPrice +
      "</dd>" +
      "<dt class='item'>" +
      fullOrder[i].toasted +
      "</dt>" +
      "<dd class='price'>" +
      fullOrder[i].toastedPrice +
      "</dd>" +
      "</dl>" +
      "<p class='total'>Price:&nbsp; </p>" +
      "<p class='total-price'>" +
      currentOrder.fullPrice +
      "</p>" +
      "</div>";

  console.log((0.5 + 0.8).toFixed(2));
  i++;
}

createSandwich();
currentOrder.setValues;
printSandwich();
printBill.innerHTML = "Total:&nbsp;" + orderTotal;
for (var i = 0; i < itemSelect.length; i++) {
  itemSelect[i].options.selectedIndex = "0";
}
for (let x = 0; x < checkBoxes.length; x++) {
  checkBoxes[x].checked = false;
}

function getIngredientsInfo() {
  for (var i = 0; i < checkBoxes.length; i++) {
    //loop check boxes
    checkBoxes[i].addEventListener("change", function() {
      //add event listener to check boxes
      if (event.target.checked) {
        //check if check boxes are checked
        ingredients.push(event.target.name); //push the name of ingredient to ingredients array
        ingredientsPrice.push(event.target.value);
        //get the price of the item checked from value attr and push it to ingredientsPrice array
        console.log(event.target.name, event.target.value + " was clicked");
      } else if (event.target.checked === false) {
        //if checkox is unchecked
        var index = ingredients.indexOf(event.target.name);
        ingredients.splice(index, 1);
        ingredientsPrice.splice(index, 1);
      }
    });
  }
}
getIngredientsInfo();
