class Boid
{
    constructor(x, y)
    {
        this.pos = createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(1, 4))
        this.r = 5
        this.turnfactor = 0.2
    }

    edges()
    {
        if (this.pos.x > width) this.pos.x = 0;
        if (this.pos.x < 0) this.pos.x = width;
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
    }

    update()
    {
        this.show()
        this.move()
        this.edges()
    }

    show()
    {
        push();
        let theta = this.vel.heading() + radians(90);
        translate(this.pos.x, this.pos.y)
        rotate(theta)
        fill(100, 202, 0, this.vel.mag() * 100)
        beginShape();
        vertex(0, -this.r * 1.5);
        vertex(-this.r, this.r * 1);
        vertex(this.r, this.r * 1);
        endShape(CLOSE);
        pop();
    }

    move()
    {   
        // let speed = this.vel.mag()

        // if (speed > this.maxspeed)
        // {   
        //     this.vel.x = (this.vel.x / speed) * this.maxspeed
        //     this.vel.y = (this.vel.y / speed) * this.maxspeed
        // }  

        // if (speed < this.minspeed)
        // {
        //     this.vel.x = (this.vel.x / speed) * this.minspeed
        //     this.vel.y = (this.vel.y / speed) * this.minspeed
        // }
        this.pos.add(this.vel)
    }
}