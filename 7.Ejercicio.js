
class Student {
    constructor(ticks) {
        this.ticks = ticks;
    }

    passExam() {
        return this.ticks >= 6;
    }
}


class NSStudent extends Student {
    constructor(ticks) {
        super(ticks); 
    }

   
    passExam() {
        return this.ticks >= 4;
    }
}


const student1 = new Student(5);
const student2 = new NSStudent(3);


console.log(`¿El estudiante 1 pasa el examen? ${student1.passExam()}`);
console.log(`¿El estudiante 2 pasa el examen? ${student2.passExam()}`);
