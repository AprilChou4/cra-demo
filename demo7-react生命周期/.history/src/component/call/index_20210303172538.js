var age=10;
var obj={
    name:'king',
    say:function(){
        console.log(this.age)
    }
}
var db={
    name:'april',
    age:17
}
obj.say.call(db);

Function.prototype.myCall=function(context){
   const cxt=context || window;
//    将当前调用的方法定义在cxt.func上(为了能以对象调用的形式绑定this)
cxt.func=this;
console.log(arguments)
const args=Array.from(arguments).slice(1)
}

obj.say.myCall(db)//我叫Tom1