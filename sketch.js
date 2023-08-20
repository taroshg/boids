var flock = new Flock();

function setup() 
{
    createCanvas(800, 600);
	flock.add(50)
}
function draw() 
{
    background(25);
	flock.run()
}