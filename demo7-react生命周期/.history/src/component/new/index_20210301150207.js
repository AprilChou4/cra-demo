function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.toString = function () {
    console.log('(' + this.name + ', ' + this.age + ')')
    return '(' + this.name + ', ' + this.age + ')';
  };
  
const p=new Person('king',25);
p.toString()


function new(constructor){
    var o=new Object();
    o.__proto__=constructor.prototype;
    var result = constructor.call(o);
    return result;

}

// var person = {
//     fullName: function() {
//         return {
//             fullName:this.firstName + " " + this.lastName
//         };
//     }
// }
// var person1 = {
//     firstName:"Bill",
//     lastName: "Gates",
// }
// const cc=person.fullName.call(person1);
// console.log(cc,person.fullName.call(person1))



// const a = new Foo();

// const o=new Object();
// o.__proto__=Foo.prototype;
// Foo.call(o);
// a=o;

// 1.先创建了一个新的空对象
// 2.然后让这个空对象的__proto__指向函数的原型prototype
// 3.将对象作为函数的this传进去，如果return 出来东西是对象的话就直接返回 return 的内容，没有的话就返回创建的这个对象
