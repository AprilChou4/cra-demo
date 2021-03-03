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
   
}

obj.say.myCall(db)//我叫Tom1