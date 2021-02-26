// https://juejin.cn/post/6844903796129136654#heading-2
// https://zhuanlan.zhihu.com/p/144058361
const PENDING='PENDING';
const FULLFILLED='FULLFILLED';
const REJECTED='REJECTED';
function Promise(executor){
    var self=this;
    self.status=PENDING;
    self.value=null;
    self.reason=null;
    self.onFulfilled = [];//成功的回调
    self.onRejected = []; //失败的回调
    // PromiseA+  2.1
    function resolve(value){
        if(self.status===PENDING){
              // PromiseA+  2.1.2
            self.status=FULLFILLED;
            self.value=value;
            self.onFulfilled.forEach(fn => fn())
        }
        
    }
    function reject(reason){
        if(self.status===PENDING){
            // PromiseA+  2.1.3
            self.status=REJECTED;
            self.reason=reason;
            self.onRejected.forEach(fn => fn())

        }
    }
    try {
        executor(resolve, reject)

    }catch(err){
        reject(err);
    }
}
Promise.prototype.then=function(onFulfilled,onRejected){
    console.log(onRejected,'----------onRejected----')
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    console.log(onRejected,'----------after----')

    let self = this;
    let promise2=new Promise((resolve,reject)=>{
        if(this.status===FULLFILLED){
            typeof onFulfilled==='function' && onFulfilled(this.value);
        }
        if(this.status===REJECTED){
            // typeof onRejected==='function' && onRejected(this.reason)
            setTimeout(() => {
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        }
        // 当then执行时，如果还是PENDING状态，我们不是马上去执行回调函数，而是将其存储起来
        if(this.status===PENDING){
            typeof onFulfilled==='function' && self.onFulfilled.push(onFulfilled)
            typeof onRejected==='function' && self.onRejected.push(onRejected)
        }
    })
    return promise2;
};
function resolvePromise(promise2, x, resolve, reject) {
    let self = this;
    //PromiseA+ 2.3.1
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used; //PromiseA+2.3.3.3.3 只能调用一次
        try {
            let then = x.then;
            if (typeof then === 'function') {
                //PromiseA+2.3.3
                then.call(x, (y) => {
                    //PromiseA+2.3.3.1
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    //PromiseA+2.3.3.2
                    if (used) return;
                    used = true;
                    reject(r);
                });

            }else{
                //PromiseA+2.3.3.4
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            //PromiseA+ 2.3.3.2
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        //PromiseA+ 2.3.3.4
        resolve(x);
    }
}
module.exports=Promise;

let p = new Promise((resolve, reject) => {
    console.log('执行了');
    // setTimeout(()=>{
    //     resolve('我成功了')
    // },1000)
    reject('被拒绝了')
}).then(res=>{
    console.log(res,'------------我是then------')
},4234)
