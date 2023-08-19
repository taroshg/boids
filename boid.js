class Boid
{
    constructor(x, y)
    {
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.r = 5;
    }

    show()
    {
        let theta = this.vel.heading() + radians(90);
        stroke(200)
        push();
        translate(this.pos.x, this.pos.y)
        rotate(theta)
        beginShape();
        vertex(0, -this.r * 1.5);
        vertex(-this.r, this.r * 1);
        vertex(this.r, this.r * 1);
        endShape(CLOSE);
        pop();
    }

    move()
    {
        this.vel = createVector(mouseX, mouseY).sub(createVector(this.pos.x, this.pos.y)).normalize()
        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }
}