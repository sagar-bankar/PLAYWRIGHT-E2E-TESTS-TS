class student {
  //properties

  name: string;
  age: number;

  //constructor
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //methods
  greet(courseName: string) {
    console.log(`👋 welcome to ${this.name} to this course ${courseName} `);
  }
}
