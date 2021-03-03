function Father(name){
    this.name=name
}
Father.prototype.age=10;

const f=new Father('灰太狼')
console.log(f,f.age,'-------------father实例------')

console.log(f.hasOwnProperty('age'),'------hasownProperty方法是判断实例中是否存在此属性---')
console.log('age' in f,'------hasownProperty方法是判断实例中是否存在此属性---')