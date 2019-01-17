# Particle Attractor

Particle Attractor is a Javascript Object Oriented program which generates particles which are attracted to the mouse cursor.

Some features of Particle Attractor can be controlled by the sliders in the program, these include controlling the magnetism, dampening and radius values.
## Prequisites
```
p5 js v0.7.0 or later
```

## Usage
Sliders
```
Radius Size: This slider changes the value of the radius of the particle going from 1 to 10.

Dampening: This affects the dampening effect of the acceleration of the particle, from 0.1-5.

Magnetism: This affects the speed at which the particles will come towards the mouse cursor, from 1-50

```
### p5 Setup Function
I put the p5 setup in the start of the html page so it gets called. 
```function setup() {
    simulation = new ParticleSimulation();
    simulation.setup()
```
### p5 Draw Function
The draw function actually draws the particles and the particle streams.
```function draw() {
    simulation.draw();
}
```
## Methods
The different get and set methods for the different functions in the javascript program.
```
    get particleCount() {
        return this._particleCount;
    }```
    ```
    set particleCount(value) {
        this._particleCount = value;
    }

    ```
    get particles() {
        return this._particles;
    }
```
```
    set particles(value) {
        this._particles = value;
    }
```
```
    get magnetism() {
        return this._magnetism;
    }

```
```
    set magnetism(value) {
        this._magnetism = value;
    }
```
```
    get radius() {
        return this._radius;
    }
```
```
    set radius(value) {
        this._radius = value;
    }
```
```
    get dampenning() {
        return this._dampenning;
    }
```
```
    set dampenning(value) {
       this._dampenning = value;
        }
  ```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and Acknowledgement 
Masake Yamabe for making the original sketch on openprocessing.org(original link:https://www.openprocessing.org/sketch/394718).

## License
[MIT](https://choosealicense.com/licenses/mit/)
