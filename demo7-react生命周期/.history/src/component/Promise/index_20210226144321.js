// https://juejin.cn/post/6844903796129136654#heading-2
// https://zhuanlan.zhihu.com/p/144058361
const PENDING='PENDING';
const FULLFILLED='FULLFILLED';
const REJECTED='REJECTED';
function Promise(executor){
    var self=this;
    this.status=PENDING;
    this.value=null;
    this.reason=null;
    // PromiseA+  2.1
    function resolve(value){
        if(self.status===PENDING){
              // PromiseA+  2.1.2
            self.status=FULLFILLED;
            self.value=value;
        }
        
    }
    function reject(reason){
        if(self.status===PENDING){
          
            self.status=REJECTED;
            self.reason=reason;
        }
    }
    try {
        executor(resolve, reject)

    }catch(err){
        reject(err);
    }
}
Promise.prototype.then=function(onFulfilled,onRejected){
    if(this.status===FULLFILLED){
        typeof onFulfilled==='function' && onFulfilled(this.value)
    }
    if(this.status===REJECTED){
        typeof onRejected==='function' && onRejected(this.reason)
    }
};
module.exports=Promise;

let p = new Promise((resolve, reject) => {
    console.log('执行了');
    // resolve('我成功了')
    reject('被拒绝了')
}).then(res=>{
    console.log(res,'------------我是then------')
},err=>{
    console.log(err,'------------我是then-第二个参数-----')
}).catch(err=>{
    console.log('----我是catch---err----')
});