// https://segmentfault.com/a/1190000018383649?utm_source=tag-newest
var age=10;
var obj={
    name:'king',
    say:function(a,b){
        console.log(this.age,a,b)
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

obj.say.myCall(db,1111,222)//我叫Tom1


Function.prototype.myApply=function(context){
    const cxt=context || window;
    //    将当前调用的方法定义在cxt.func上(为了能以对象调用的形式绑定this)
    cxt.func=this;
    console.log(arguments,'----arguments------')
    const res=arguments[1] ? cxt.func(...arguments[1]):cxt.func();
    // 删除该方法，不然会对传入的对象造成污染
    delete cxt.func;
    return res;
}

obj.say.myApply(db,[1111,222])//我叫Tom1

Function.prototype.myBind=function(context){
    // 对context进行深拷贝，防止污染
    const cxt=JSON.parse(JSON.stringify(context)) || window;
    // 将当前被调用的方法定义在cxt上
    cxt.func=this;
    const args=Array.from(arguments).slice(1);
    // bind返回一个绑定函数，等待调用
    return function(){
        const allArgs=args.concat(Array.from(arguments));
        return allArgs.length>0 ?cxt.func(...allArgs) :cxt.func()
    }
}