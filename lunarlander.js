function setup() {
  createCanvas(800, 600);
  frameRate(30);
}

let x = 20;
let y = 200;
let s = 0.8;
let rocketShipY = 25;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = false;
let speed = 0;

function rocketShip(x, y, s) {
  //top of the ship
  translate(x, y, s);
  fill(210, 20, 210);
  triangle(x - 10 * s, y - 40 * s, x + 10 * s, y - 40 * s, x, y - 150 * s);
  //Rocket body
  fill(0, 120, 0);
  ellipse(x, y + 100 * s, 100 * s, 330 * s);
  ellipse(x, y + 40 * s, 45 * s);
  fill(255, 255, 255);
  strokeWeight(3);
  ellipse(x, y + 40 * s, 40 * s);
  //Rocket leg:Right
  fill(210, 20, 210);
  ellipse(x + 50 * s, y + 180 * s, 30 * s);
  ellipse(x + 60 * s, y + 190 * s, 25 * s);
  ellipse(x + 70 * s, y + 200 * s, 20 * s);
  fill(255, 255, 255);
  triangle(
    x + 85 * s,
    y + 205 * s,
    x + 60 * s,
    y + 210 * s,
    x + 95 * s,
    y + 290 * s
  );
  //Rocket leg:Left
  fill(210, 20, 210);
  ellipse(x - 50 * s, y + 180 * s, 30 * s);
  ellipse(x - 60 * s, y + 190 * s, 25 * s);
  ellipse(x - 70 * s, y + 200 * s, 20 * s);
  fill(255, 255, 255);
  triangle(
    x - 85 * s,
    y + 205 * s,
    x - 60 * s,
    y + 210 * s,
    x - 95 * s,
    y + 290 * s
  );
  //Rocket leg:midde
  fill(210, 20, 210);
  ellipse(x, y + 180 * s, 30 * s);
  ellipse(x, y + 190 * s, 25 * s);
  ellipse(x, y + 200 * s, 20 * s);
  fill(255, 255, 255);
  triangle(x - 10 * s, y + 210 * s, x + 10 * s, y + 210 * s, x, y + 290 * s);
}
function moonLanding() {
  push();
  fill(180, 180, 180);
  ellipse(360, 1100, 1200);
  fill(120, 120, 120);
  ellipse(200, 600, 90, 70);
  ellipse(100, 600, 20);
  ellipse(300, 600, 30);
  ellipse(490, 600, 100, 70);
  ellipse(400, 550, 50);
  pop();
  push();
  fill(100, 100, 100);
  strokeWeight(3);
  stroke(255, 256, 255);
  line(260, 520, 280, 500);
  line(400, 500, 420, 520);
  line(340, 500, 340, 530);
  ellipse(340, 500, 190, 20);
  pop();
}
function startScreen() {
  background(0, 0, 0);
  rect(200, 200, 300);
  text("Welcome to moon landing!", 275, 300);
  text("Click Space in order to start the game", 250, 380);
  text("Tip use the arrow keys!!!! (use arrow up to start)", 230, 420);

  if (keyIsDown(32)) {
    x = 20;
    rocketShipY = 25;
    velocity = 1;
    state = "game";
  }
}
function winScreen() {
  background(0, 255, 0);
  text("Congratulations YOU WON", 300, 350);
  text("Press enter to go back!", 300, 370);
  if (keyIsDown(13)) {
    state = "start";
  }
}
function loseScreen() {
  background(255, 0, 0);
  text("NO NO NO YOU LOSE", 300, 350);
  text("Press enter to go back!", 300, 370);
  if (keyIsDown(13)) state = "start";
}
function gameScreen() {
  noStroke();
  background(0, 0, 0);

  //for the stars
  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 3);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  moonLanding();
  //rocketship function upp and down
  stroke(0.3);
  rocketShip(x, rocketShipY, 0.35);
  if (isGameActive) {
    rocketShipY = rocketShipY + velocity;
    velocity = velocity + acceleration;
    x = x + speed;
  }
  if (keyIsDown(38)) {
    isGameActive = true;
  }
  if (rocketShipY > 195) {
    isGameActive = false;
    if (velocity > 3 || x > 205 || x < 125) {
      state = "lose";
    } else state = "win";
    velocity = 0;
  } else if (keyIsDown(38)) {
    velocity = velocity - 0.5;
  } else if (keyIsDown(39)) {
    speed = 5;
  } else if (keyIsDown(37)) {
    speed = -5;
  } else {
    speed = 0;
  }

  console.log(x);
}
//stars
let starX = [];
let starY = [];
let starAlpha = [];
for (let i = 0; i < 200; i++) {
  const x = Math.floor(Math.random() * 800);
  const y = Math.floor(Math.random() * 600);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}
let state = "start";
function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "win") {
    winScreen();
  } else if (state === "lose") {
    loseScreen();
  }
}
