let x = 200;
let y = 200;
let s = 0.8;

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
  //triangle(190, 370, 210, 370, 200, 490);
  fill(210, 20, 210);
  ellipse(x, y + 180 * s, 30 * s);
  ellipse(x, y + 190 * s, 25 * s);
  ellipse(x, y + 200 * s, 20 * s);
  fill(255, 255, 255);
  triangle(x - 10 * s, y + 210 * s, x + 10 * s, y + 210 * s, x, y + 290 * s);
}

let rocketShipY = 30;
let velocity = 1;
let acceleration = 0.2;
let isGameActive = true;
let speed = 0;

function scenery() {
  push();
  noStroke();
  fill("lightblue");
  rect(0, 0, width, height);

  fill("green");
  rect(0, 500, width, 300);
  pop();
}

function draw() {
  scenery();
  rocketShip(x, rocketShipY, 0.4, rotate);

  if (isGameActive) {
    rocketShipY = rocketShipY + velocity;
    velocity = velocity + acceleration;
    x = x + speed;
    if (rocketShipY > 200) {
      isGameActive = false;
    }

    if (keyIsDown(38)) {
      velocity = velocity - 1.0;
    }
    if (keyIsDown(39)) {
      speed = 5;
    } else if (keyIsDown(37)) {
      speed = -5;
    } else {
      speed = 0;
    }
  }
}


let starX = [];
let starY = [];
let starAlpha = [];
for (let i = 0; i < 200; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}


// function draw() {
//   noStroke();
//   background(0, 0, 0);

//   for (let index in starX) {
//     fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
//     ellipse(starX[index], starY[index], 3);
//     starAlpha[index] = starAlpha[index] + 0.02;

//     fill(180, 180, 180);
//     ellipse(350, 1100, 1200);
//     fill(120, 120, 120);
//     ellipse(200, 600, 90, 70);
//     ellipse(100, 600, 20);
//     ellipse(300, 600, 30);
//     ellipse(490, 600, 100, 70);
//     ellipse(400, 550, 50);
//     push();
//     strokeWeight(3);
//     stroke(255, 256, 255);
//     line(260, 520, 280, 500);
//     line(400, 500, 420, 520);
//     line(340, 500, 340, 530);
//     ellipse(340, 500, 190, 20);
//     pop();
//   }
// }

