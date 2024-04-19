class A {
    constructor(arg) {
        this.arg = arg;
    }
}
class B extends A {
    constructor(arg, b_arg) {
        super(arg); 
        this.b_arg = b_arg;
    }
}
class C extends B {
    constructor(arg, b_arg, c_arg) {
        super(arg, b_arg); 
        this.c_arg = c_arg;
    }
}

const c_instance = new C("A argument", "B argument", "C argument");


console.log(`A argumento: ${c_instance.arg}`);
console.log(`B argumento: ${c_instance.b_arg}`);
console.log(`C argumento: ${c_instance.c_arg}`);

