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


// 原型链继承
function Son(){

}
Son.prototype=new Father();
const s=new Son();
console.log(s,s.age,'-------s----------')
