function setup() {
    createCanvas(900, 900);
    background("gray");
  }
  
  function draw() {
  
    stroke("gray");
    fill("black");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }