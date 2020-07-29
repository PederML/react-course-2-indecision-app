class Person {
    constructor(name="Unknown", age=0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hi. I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name="Unknown", age=0, major="Undecided"){
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += ` There major is ${this.major}.`
        }
        return description;
    }
}



const p1 = new Student('Peder Lund', 25, "Computer Science");

console.log(p1.getDescription());

