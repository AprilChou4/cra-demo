function Person(name,age){
    this.name=name;
    this.age=age;
    const
}
Person.prototype.toString = function () {
    console.log('(' + this.name + ', ' + this.age + ')')
    return '(' + this.name + ', ' + this.age + ')';
  };
  
const p=new Person('king',25);