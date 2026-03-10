function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.greet = function() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
};
let joao = new Person("Joao", "Mateus");
let francisco = new Person("Francisco", "Alves");
Person.prototype.age = 30;
console.log(joao);
console.log(francisco);
joao.greet();
francisco.greet();
joao.age = 25;
console.log(joao.age);       
console.log(francisco.age); 
