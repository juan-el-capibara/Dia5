class Shape {
    constructor() {
        
    }

    
    calculateArea() {
        console.log("El cálculo de área se implementará en las subclases.");
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

const circleInstance = new Circle(5);
const circleArea = circleInstance.calculateArea();


const triangleInstance = new Triangle(6, 4);
const triangleArea = triangleInstance.calculateArea();


console.log(`Área del círculo: ${circleArea.toFixed(2)}`);
console.log(`Área del triángulo: ${triangleArea.toFixed(2)}`);
