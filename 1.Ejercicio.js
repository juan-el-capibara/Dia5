class Person {
    constructor(name,age,country)
{
    this.name=name
    this.age=age
    this.country=country
}
 displayDetails(){
    console.log(`Nombre:${this.name}, Edad: ${this.age} Pais: ${this.country}`)
 }
}

const person1 = new Person("Alice",30,"EE.UU")
const person2 = new Person("Bob",25,"Canada")

person1.displayDetails()
person2.displayDetails()
