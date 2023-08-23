class Flock
{
    constructor()
    {
        this.boids = []
        this.visualRange = 100
        this.protectedRange = 20
        
        this.alignmentFactor = 0.1
        this.cohesionFactor = 0.01
        this.separationFactor = 1
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
            let n_neighbors = 0

            let alignment = createVector()
            let cohesion = createVector()
            let separation = createVector()
            for (let other of this.boids)
            {
                if (other != boid)
                {
                    let distance = p5.Vector.dist(boid.pos, other.pos)
                    if (distance < this.visualRange)
                    {
                        alignment.add(other.vel)
                        cohesion.add(other.pos)

                        if(distance < this.protectedRange)
                        {
                            separation.add(p5.Vector.sub(boid.pos, other.pos).div(distance))
                        }
                    
                        n_neighbors += 1
                    }
                }
            }

            if (n_neighbors > 0)
            {
                alignment.div(n_neighbors).sub(boid.vel)
                cohesion.div(n_neighbors).sub(boid.pos)
            }

            boid.vel.add(cohesion.mult(this.cohesionFactor))
            boid.vel.add(separation.mult(this.separationFactor))
            boid.vel.add(alignment.mult(this.cohesionFactor))

            boid.vel.limit(4)

            // push()
            // fill(255, 25)
            // circle(boid.pos.x, boid.pos.y, this.visualRange)
            // pop()

            boid.update()
            // let flock_pos = createVector(0, 0)
            // let flock_vel = createVector(0, 0)
            // let evade = createVector(0, 0)
            // let n_other = 0
            // for (let other of this.boids){
            //     if (boid != other){
            //         let distance = p5.Vector.dist(boid.pos, other.pos)
            //         if (distance < this.visualRange)
            //         {
            //             flock_pos.add(other.pos)
            //             flock_vel.add(other.vel)
            //             n_other += 1

            //             if(distance < this.protectedRange)
            //             {
            //                 evade.add(boid.pos.sub(other.pos))
            //             }
            //         }
            //     }
            // }
            // if (n_other > 0)
            // {
            //     flock_pos.div(n_other)
            //     flock_vel.div(n_other)    
            // }

            // boid.vel.add(flock_pos.sub(boid.pos).mult(this.centeringFactor))
            // boid.vel.add(flock_vel.sub(boid.vel).mult(this.matchingFactor))
            // boid.vel.add(evade.mult(this.avoidFactor))
        }
    }
}