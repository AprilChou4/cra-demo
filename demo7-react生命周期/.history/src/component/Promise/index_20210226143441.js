// https://juejin.cn/post/6844903796129136654#heading-2
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
    if(typeof onFulfilled==='function'){
        onFulfilled(this.value)
    }
};
module.exports=Promise;

let p = new Promise((resolve, reject) => {
    console.log('执行了');
    resolve('我resloved了')
}).then(res=>{
    console.log(res,'------------我是then------')
},err=>{
    console.log(err,'------------我是then-第二个参数-----')
});