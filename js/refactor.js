var itemSelect = document.querySelectorAll("select");
var addSandwich = document.getElementById("add-sandwich");
var checkBoxes = document.getElementsByClassName("checkbox");
var checkboxContainer = document.querySelector(".checkbox-container");
var orderDiv = document.getElementsByClassName("checkout")[0];
var fieldset = document.querySelector(".checkbox-container fieldset");
var orderDetails = document.getElementById("order-details");
var printBill = document.getElementsByClassName("print-bill");
var sandwichNumber = 0;
var orderItems = [];
var orderPrices = [];
var ingredients = [];
var ingredientsPrice = [];
var totalItems;
var orders = [];
var index = [];
var html = "";
var billTotal = 0;

// get the index of the selected items drop down list
function choiceIndex() {
  for (var i = 0; i < itemSelect.length; i++) {
    index.push(itemSelect[i].options.selectedIndex);
  }
}

// get order data and store it to the orderItems and orderPrices Array
function writeOrder() {
  for (var i = 0; i < itemSelect.length; i++) {
    orderItems.push(itemSelect[i].value);
    orderPrices.push(
      itemSelect[i].options[index[i]].getAttribute("data-price")
    );
  }
}
function getIngredientsInfo() {
  //loop through check boxes
  for (let i = 0; i < checkBoxes.length; i++) {
    //add event listener to check boxes
    checkBoxes[i].addEventListener("change", function(event) {
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
    });
  }
}

function resetValues() {
  for (var i = 0; i < itemSelect.length; i++) {
    itemSelect[i].options.selectedIndex = "0";
  }
  for (let x = 0; x < checkBoxes.length; x++) {
    checkBoxes[x].checked = false;
  }
  ingredients = [];
  ingredientsPrice = [];
  orderItems = [];
  orderPrices = [];
  index = [];
}

function addPrices() {
  orderPrices.total = 0;
  orderPrices.forEach(function(price) {
    orderPrices.total += Math.abs(price);
    billTotal += Math.abs(price);
  });
}
/////////////////
///Order html////
/////////////////

function printOrder() {
  if (orderItems[0] === "No selection") {
    alert(
      "Invalid order. Please make sure you have selected a bread type and at least two ingredients."
    );
  } else {
    if (sandwichNumber < 1) {
      orderDiv.classList.add("show-order");
    }
    for (var i = 0; i < orderItems.length; i++) {
      html +=
        "<dt class='item'>" +
        orderItems[i] +
        "</dt>" +
        "<dd class='price'>" +
        orderPrices[i] +
        "</dd>";
    }

    orderDetails.innerHTML +=
      "<div class='row'>" +
      "<img class='bread-cart' src='../icons/bread.svg' alt='Sandwich icon'>" +
      "<h2 class='sandwich-header'>Sandwich " +
      (sandwichNumber += 1) +
      "</h2>" +
      "<dl>" +
      html +
      "</dl>" +
      "<p class='total white'>Price:&nbsp; </p>" +
      "<p class='total-price mustard'>" +
      orderPrices.total.toFixed(2) +
      "</p>" +
      "</div>";
  }
  html = "";
  printBill[0].innerHTML = "Total:&nbsp;";
  printBill[1].innerHTML = billTotal.toFixed(2);
}

/////////////
///Events////
/////////////

checkboxContainer.addEventListener("click", function(event) {
  if (
    event.target.className !== "checkbox" &&
    event.target.className !== "checkbox-div" &&
    event.target.className !== "label"
  ) {
    fieldset.classList.toggle("hidden");
  }
});

getIngredientsInfo();

addSandwich.addEventListener("click", () => {
  choiceIndex();
  writeOrder();
  for (var i = 0; i < ingredients.length; i++) {
    orderItems.splice(1, 0, ingredients[i]);
    orderPrices.splice(1, 0, ingredientsPrice[i]);
  }
  addPrices();
  printOrder();
  orders.push([[orderItems], [orderPrices]]); //store  the order in the orders array
  resetValues();
});
