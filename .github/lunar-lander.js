let x = 200;
let y = 200;
let s = 0.8;

//top of the ship
function rocketShip(x, y, s) {
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
}
