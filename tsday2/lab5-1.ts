type Rectangle = {width: number; height: number};
type Circle = {radius: number};

function calcArea(shape: Rectangle | Circle): number {
    if("width" in shape && "height" in shape) {
        return shape.width * shape.height;
    } else if("radius" in shape) {
        return Math.PI * shape.radius * shape.radius;
    }

    throw new Error("Unknown shape");
}


console.log(calcArea({width: 10, height: 5}));
console.log(calcArea({radius: 7}));