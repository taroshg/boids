class Flock
{
    constructor()
    {
        this.boids = []
        this.avoidFactor = 5e-2
        this.visualRange = 50
        this.protectedRange = 2
        this.centeringFactor = 5e-4
        this.matchingFactor = 5e-2
    }

    add(n_boids)
    {
        for(let i = 0; i < n_boids; i++)
        {
            this.boids.push(new Boid(random(0, width), random(0, height)))
        }
    }

    run()
    {   
        for(let boid of this.boids){
            let flock_pos = createVector(0, 0)
            let flock_vel = createVector(0, 0)
            let evade = createVector(0, 0)
            let n_other = 0
            for (let other of this.boids){
                if (boid != other){
                    let distance = p5.Vector.dist(boid.pos, other.pos)
                    if (distance < this.visualRange)
                    {
                        flock_pos.add(other.pos)
                        flock_vel.add(other.vel)
                        n_other += 1

                        if(distance < this.protectedRange)
                        {
                            evade.add(boid.pos.sub(other.pos))
                        }
                    }
                }
            }
            if (n_other > 0)
            {
                flock_pos.div(n_other)
                flock_vel.div(n_other)    
            }

            boid.vel.add(flock_pos.sub(boid.pos).mult(this.centeringFactor))
            boid.vel.add(flock_vel.sub(boid.vel).mult(this.matchingFactor))
            boid.vel.add(evade.mult(this.avoidFactor))

            boid.update()
        }
    }
}