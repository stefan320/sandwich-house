var selectBread = document.querySelectorAll(".bread-select");
var sauceSelect = document.querySelectorAll(".sauces-select");
var itemSelect = document.querySelectorAll("select");
var option = document.querySelectorAll("option");

var Sandwich = function(bread, sauce, sideDish, drink, toasted) {
  this.bread = bread;
  this.sauce = sauce;
  this.sideDish = sideDish;
  this.drink = drink;
  this.toasted = toasted;
};

var selectItemsValue = {};
//
// var currentSandwich = new Sandwich(
//   itemSelect[0].value,
//   itemSelect[1].value,
//   itemSelect[2].value,
//   itemSelect[3].value,
//   itemSelect[4].value
// );

// function sandwich(bread, sauce, sideDish, drink, toasted) {
//   this.bread = bread;
//   this.sauce = sauce;
//   this.sideDish = sideDish;
//   this.drink = drink;
//   this.toasted = toasted;
// }
//
// function loop(el) {
//   for (var i = 0; i < el.length; i++) {
//     el[i];
//   }
// }
//
// sandwich(loop(selectItemsValue));

for (var i = 0; i < itemSelect.length; i++) {
  itemSelect[i].addEventListener("change", function() {
    let choice = event.target;
    selectItemsValue[choice.value] = choice.options[
      choice.selectedIndex
    ].getAttribute("data-price");
  });
}

// for (var i = 0; i < itemSelect.length; i++) {
//   selectItemsValue.push(
//     itemSelect[0].options[itemSelect[0].selectedIndex].getAttribute(
//       "data-price"
//     )
//   );
// }

// for (var i = 0; i < itemSelect.length; i++) {

// }

// let chosenItem;
// let chosenItemPrice;
// var ingredients = [];
// var ingredientsPrice = [];
// let selectedItem;
// var sideDishes = [];
// var drink = [];
// var toasted;
// var currentSandwich = {};
// var breadAndPrice = [
//   ["baguette", 0.8],
//   ["burger bun", 0.8],
//   ["ciabatta", 0.9],
//   ["focaccia", 1.5],
//   ["ftira", 0.8],
//   ["olive bread", 1.3],
//   ["rye bread", 1.3],
//   ["sliced bread", 0.9],
//   ["tortilla", 1.6],
//   ["wheat bread", 0.9],
//   ["whole grain bread", 1.2]
// ];
// var sauceAndPrice = [
//   ["chili sauce", 0.25],
//   ["garlic and olive oil", 0.35],
//   ["ketchup", 0.15],
//   ["mayonnaisee", 0.15],
//   ["garlic basil mayo", 0.45],
//   ["mustard", 0.25]
// ];
// var sideDishesAndPrice = [
//   ["coleslaw", 1.2],
//   ["curly fries", 1.6],
//   ["mixed salad", 2.5],
//   ["potato wedges", 1.8],
//   ["potato salad", 2.2],
//   ["sliced potato fries", 1.8],
//   ["sweet potatoes fries", 2.8]
// ];
// var drinksAndPrice = [
//   ["stillW water", 0.8],
//   ["frizzy water", 0.8],
//   ["coca cola", 1.5],
//   ["sprite", 1.5],
//   ["fanta", 1.5],
//   ["kinnie", 1.5],
//   ["cisk", 2.8]
// ];
//
// var toasted = [["yes", 0.25], ["no", 0]];
//
// function getBreadInfo(el, currentOption) {
//   for (var i = 0; i < el.length; i++) {
//     //add event listener to all bread select menu options
//     el[i].addEventListener("change", function() {
//       selectedItem = event.target.value; //current selected item
//       var a = getArrIndex(breadAndPrice, selectedItem);
//       console.log(event.target.value);
//       if (event.target.name === "bread-type") {
//         currentSandwich.breadType = chosenItem;
//         currentSandwich.breadPrice = chosenItemPrice;
//       } else if (event.target.name === "sauce-select") {
//         currentSandwich.sauce = chosenItem;
//         currentSandwich.saucePrice = chosenItemPrice;
//       } else if (event.target.name === "side-dishes-select") {
//         currentSandwich.sideDish = chosenItem;
//         currentSandwich.sideDishPrice = chosenItemPrice;
//       } else if (event.target.name === "drinks-select") {
//         currentSandwich.drinkSelect = chosenItem;
//         currentSandwich.drinkPrice = chosenItemPrice;
//       } else if (event.target.name === "toasted-select") {
//         currentSandwich.toasted = chosenItem;
//       }
//     });
//   }
// }
//
// function getArrIndex(arr, val) {
//   // val is the selected item
//   for (var i = 0; i < arr.length; i++) {
//     //iterate through the current choosen array
//     if (arr[i][0] === val) {
//       // if selected item is found in the array
//       chosenItem = arr[i][0]; // store the item in choosenItem value
//       chosenItemPrice = arr[i][1]; // store the item price in choosenItem value
//     }
//   }
// }
//
// getBreadInfo(selectBread, breadAndPrice);
// //get the index of the selected item from the bread and price array
//
// function getIngredientsInfo() {
//   for (var i = 0; i < checkBoxes.length; i++) {
//     //loop check boxes
//     checkBoxes[i].addEventListener("change", function() {
//       //add event listener to check boxes
//       if (event.target.checked) {
//         //check if check boxes are checked
//         ingredients.push(event.target.name); //push the name of ingredient to ingredients array
//         ingredientsPrice.push(event.target.value); //get the price of the item checked from value attr and push it to ingredientsPrice array
//       } else if (event.target.checked === false) {
//         //if checkox is unchecked
//         var index = ingredients.indexOf(event.target.name);
//         ingredients.splice(index, 1);
//         ingredientsPrice.splice(index, 1);
//       }
//     });
//   }
// }
// getIngredientsInfo();
