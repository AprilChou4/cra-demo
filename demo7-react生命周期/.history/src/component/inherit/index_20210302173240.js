function Father(name){
    this.name=name
}
Father.prototype.age=10;

const f=new Father('灰太狼')
console.log(f,f.age,'-------------father实例------')