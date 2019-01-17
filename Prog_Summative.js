let windowWidth = 1000;
let windowHeight = 1000;

/**This program is divided into two different classes, this is the first class Particle:
 */
class Particle {
    /**
     *
     * @param sim {ParticleSimulation}  The parent particle simulation
     * @param vx The velocity in the x direction of the particles.
     * @param vy The velocity in the y direction of the particles.
     * @param x The horizontal position of the particles.
     * @param y The vertical position of the particles.
     */
    constructor(sim, x, y, vx, vy,) {
        this.sim = sim;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
    }

    update() {

    }
/*This is the draw function of the class particle, it calculates the distance between particles using the Math.hypotneuse function */
    draw(renderer) {
        let distance = Math.hypot(mouseX - this.x, mouseY - this.y); //dist(x1,y1,x2,y2) ２
/*These are the acceleration values of the particles*/
        let ax
        let ay
/*This if statement calculatues the acceleration value depending on how far away the particles are from each other.*/
        if (distance > 3) {
            ax = this.sim.magnetism * (mouseX - this.x) / (distance * distance);
            ay = this.sim.magnetism * (mouseY - this.y) / (distance * distance);
        } else {
            ax = 0;
            ay = 0;
        }
/*These then add the acceleration values to the velocity and incorporates the dampening value to the velocity as well*/
        this.vx += ax;
        this.vy += ay;

        this.vx = this.vx * this.sim.dampenning;
        this.vy = this.vy * this.sim.dampenning;

        this.x += this.vx;
        this.y += this.vy;
/*These constants calculate the speed which is then used for the three constants r, g, and b.*/
        const speed = Math.hypot(this.vx, this.vx);
        const r = map(speed, 0, 5, 0, 255);
        const g = map(speed, 0, 5, 64, 255);
        const b = map(speed, 0, 5, 128, 255);
/*r,g,b are then used with the renderer to actually draw the strokes and the particles*/
        if (renderer === undefined) {
            stroke(r, g, b, 32);
            fill(r, g, b, 32);

            ellipse(this.x, this.y, this.sim.radius, this.sim.radius);
        } else {
            renderer.fill(r, g, b, 32);
            renderer.ellipse(this.x, this.y, this.sim.radius, this.sim.radius);
        }
    }
}
/*This is the second class whi*/
class ParticleSimulation {
    constructor() {

        this._particleCount = 1000;
        this._particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles[i] = new Particle(this, Math.random() * window.innerWidth, Math.random() * window.innerHeight, 0, 0)
        }
        this._magnetism = 10.0;
        this._radius = 1;
        this._dampenning = 0.95;

    }

    setup() {
        createCanvas(window.innerWidth, window.innerHeight)

        fill(0, 0, 0);
        stroke(0, 0, 0);
        rect(0, 0, width, height);
    }

    draw(renderer) {


        for (let i = 0; i < this.particleCount; i++) {
            this.particles[i].update();
            this.particles[i].draw(renderer)
        }
    }

    get particleCount() {
        return this._particleCount;
    }

    set particleCount(value) {
        this._particleCount = value;
    }

    get particles() {
        return this._particles;
    }

    set particles(value) {
        this._particles = value;
    }

    get magnetism() {
        return this._magnetism;
    }

    set magnetism(value) {
        this._magnetism = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get dampenning() {
        return this._dampenning;
    }

        set dampenning(value) {
            this._dampenning = value;
        }
}

