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
   console.log(this,'------this')
}

obj.say.MyCall(db)//我叫Tom1