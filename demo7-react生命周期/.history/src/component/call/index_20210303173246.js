// https://segmentfault.com/a/1190000018383649?utm_source=tag-newest
var age=10;
var obj={
    name:'king',
    say:function(a){
        console.log(this.age,a)
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
    console.log(Array.from(arguments),args,'-args')
    const res=arguments.length>1 ? cxt.func(...args):cxt.func();
    // 删除该方法，不然会对传入的对象造成污染
    delete cxt.func;
    return res;
}

obj.say.myCall(db,1111)//我叫Tom1