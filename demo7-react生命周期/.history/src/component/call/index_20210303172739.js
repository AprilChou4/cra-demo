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
    console.log(arguments,'----arguments------')
    const args=Array.from(arguments).slice(1);
    const res=arguments.length>1 ? cxt.func(...args):cxt.func();
    // 删除该方法，不然会对传入的对象造成污染
    delete cxt.func;
    return res;
}

obj.say.myCall(db)//我叫Tom1