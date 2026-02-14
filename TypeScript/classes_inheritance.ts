// Classes and Inheritance
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        console.log(`My name is ${this.name}.`);
    }
}

class Student extends Person {
    private grade: number;

    constructor(name: string, grade: number) {
        super(name);
        this.grade = grade;
    }

    describe(): void {
        super.describe();
        console.log(`I am in grade ${this.grade}.`);
    }
}

const student = new Student("Mubin", 12);
student.describe();
