class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting () {
        return `Hi I am ${this.name}`;
    }

    getDescription () {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor () {
        return !!this.major;
    }

    getDescription () {
        let description = super.getDescription();

        if (this.hasMajor()) {
        description+= ` Their major is ${this.major}`;
        };
        return description;
    }
}

class Traveller extends Person{

    constructor (name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation () {
        return !!this.homeLocation;
    }

    getGretting () {
        let gretting = super.getGretting();

        if (this.homeLocation ){
            gretting+= ` I am visiting from ${this.homeLocation}`; 
        }
        return gretting;
    }

}

// const me = new Person ('Dalia', 20);
// console.log(me);
// console.log(me.getGretting());
// console.log(me.getDescription());

// const other = new Person ();
// //console.log(other);
// console.log(other.getGretting());
// console.log(other.getDescription());

// const me = new Student ('Dalia', 20, 'Physics');
// console.log(me.getDescription());

// const other = new Student ();
// console.log(other.getDescription());

const me = new Traveller ('Dalia', 20, 'Oslo');
console.log(me.getGretting());

const other = new Traveller ();
console.log(other.getGretting());