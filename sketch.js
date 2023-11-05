let displayText = "Welcome to Silent Market";
let itemsInCart = [];
let transactionComplete = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
}

function draw() {
  background(0);
  textSize(32);
  textAlign(CENTER, CENTER);

  if (transactionComplete) {
    fill(0, 255, 0);
    text("Transaction Complete", width / 2, height / 2);
  } else {
    fill(255);
    if (itemsInCart.length > 0) {
      text("Cart:", width / 2, height / 2 - 40);
      for (let i = 0; i < itemsInCart.length; i++) {
        text(itemsInCart[i], width / 2, height / 2 + i * 40);
      }
    } else {
      text(displayText, width / 2, height / 2);
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    displayText = "Pineapple is added to cart";
    itemsInCart.push("Pineapple is added to cart");
  } else if (keyCode === DOWN_ARROW) {
    if (displayText === "Pineapple is added to cart") {
      itemsInCart.push("Toothpaste is added to cart");
    }
  } else if (keyCode === 32) {
    transactionComplete = true;
  }
}
