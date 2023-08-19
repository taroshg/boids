var boids = [];

function setup() {
  createCanvas(800, 600);
  for(i = 0; i < 10; i++)
  {
    boids.push(new Boid(random(0, width), random(0, height)))
  }

}
function draw() {
  background(25);
  boids.forEach(b => {
    b.move()
    b.show()
  });

}
