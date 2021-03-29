function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  for (let i = 0; i < 500; i++) {
    fill(random(250), random(250), random(250), random(250));
    ellipse(random(windowWidth), random(windowHeight), random(100));
  }
}

//Step 1: Write a setup function
//Step 2: Create canvas
//Step 3: Create 500 circles with for loop
//Step 4: Set up the color using fill()
//Step 5: Draw actual circles with color using ellipse() fuction
