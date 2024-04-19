class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}


const rectangleInstance = new Rectangle(5, 3);


const area = rectangleInstance.calculateArea();
const perimeter = rectangleInstance.calculatePerimeter();


console.log(`Área del rectángulo: ${area}`);
console.log(`Perímetro del rectángulo: ${perimeter}`);
