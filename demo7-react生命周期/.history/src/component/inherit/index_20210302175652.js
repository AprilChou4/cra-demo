function Father(name){
    this.name=name
}
Father.prototype.age=10;

const f=new Father('灰太狼')
console.log(f,f.age,f.name,'-------------father实例------')

console.log(f.hasOwnProperty('age'),'------hasownProperty方法是判断实例中是否存在此属性---')
console.log('age' in f,'------ in操作符是判断实例和原型中是否存在此属性---')
f.age=25; //  隐藏了原型的属性
console.log(f.age,'------f的实例属性-------')
delete f.age //删除了原型属性
console.log(f.age,'------f的实例属性11-------')


// // 一、原型链继承
// // 重点：让新实例的原型等于父类的实例。
// // 特点：1、实例可继承的属性有：实例的构造函数的属性，父类构造函数属性，父类原型的属性。（新实例不会继承父类实例的属性！）
// // 缺点：1、新实例无法向父类构造函数传参。
// // 　　　2、继承单一。
// // 　　　3、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！）
// function Son(){
// }
// Son.prototype=new Father();
// const s=new Son('小灰灰');
// console.log(s,s.age,s.name,'-------s----------')


// 二、借用构造函数继承
function Son(name){
    Father.call(this,name);
}
const s1=new Son('小灰灰')
console.log(s1,'--------s1--------')