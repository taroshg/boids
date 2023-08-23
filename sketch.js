var flock = new Flock();

let alignmentFactorSlider, cohesionFactorSlider, separationFactorSlider;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
	alignmentLabel = createDiv("Alignment")
	alignmentFactorSlider = createSlider(0, 1, 0.1, 0.01)
	alignmentFactorSlider.parent(alignmentLabel)

	cohesionLabel = createDiv("Cohesion")
	cohesionFactorSlider = createSlider(0, 0.1, 0.01, 1e-4)
	cohesionFactorSlider.parent(cohesionLabel)

	separationLabel = createDiv("Separation")
	separationFactorSlider = createSlider(0, 1, 1, 0.01)
	separationFactorSlider.parent(separationLabel)

;	flock.add(500)
}
function draw() 
{
    background(25);
	flock.alignmentFactor = alignmentFactorSlider.value()
	flock.cohesionFactor = cohesionFactorSlider.value()
	flock.separationFactor = separationFactorSlider.value()
	flock.run()
}