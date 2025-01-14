// 1. Copy and paste your prototype in here and refactor into class syntax.
//CREATED a class CuboidMaker and changed the CUboidMaker as it was a duplicate of prototype.js and removed the function and prototype and 
//replaced with arrow function., added a costructor.
class CUboidMaker {
    constructor(length, width, height) {
        this.height = height;
        this.width = width;
        this.length = length;
    }
    volume = (Cuboid) => {
        return this.height * this.length * this.width;
    }
    surfaceArea = (Cuboid) => {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)
    }
}
const Cuboid = new CUboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
//  Find out the formulas for volume and surface area for cubes and create those methods using the dimension 
//  properties from CuboidMaker.  Test your work by logging out your volume and surface area.