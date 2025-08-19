interface Shape {
  width: number;
  height: number;
}

function calcArea(shape: Shape): number {
    return shape.width * shape.height;
}


const rectangle: Shape = { width: 10, height: 5};
const square: Shape = {width: 7, height: 7};

console.log("Rectangle area:", calcArea(rectangle));
console.log("Square area:", calcArea(square));

interface Rectangle {
    width: number;
    height: number;
}

interface Circle {
    radius: number;
}

type Geometry = Rectangle | Circle;

function calcGeometryArea(shape: Geometry): number {
    // console.log(typeof shape);
    // if(typeof shape === )
    // if(shape.radius !== undefined) {
    if("radius" in shape) {
        console.log("calc circle:")
        return Math.PI * shape.radius * shape.radius;
    }
    return shape.width * shape.height;
}

const rect: Rectangle = { width: 10, height: 5 };
const cir: Circle = { radius: 7 };


console.log("Geometry area:", calcGeometryArea(rect));
console.log("Geometry area:", calcGeometryArea(cir));