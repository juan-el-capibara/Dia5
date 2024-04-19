class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayDetails() {
        console.log(`Marca: ${this.brand}, Modelo: ${this.model}, Año: ${this.year}`);
    }
}
class Coche extends Vehicle {
    constructor(brand, model, year, numDoors) {
        super(brand, model, year);
        this.numDoors = numDoors;
    }


    displayDetails() {
        super.displayDetails();
        console.log(`Número de puertas: ${this.numDoors}`);
    }
}

const myCar = new Coche("Toyota", "Camry", 2022, 4);


myCar.displayDetails();
