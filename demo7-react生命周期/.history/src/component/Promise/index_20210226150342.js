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
            self.onFulfilled.forEach(fn => fn(value))
        }
        
    }
    function reject(reason){
        if(self.status===PENDING){
            // PromiseA+  2.1.3
            self.status=REJECTED;
            self.reason=reason;
            self.onRejected.forEach(fn => fn(reason))

        }
    }
    try {
        executor(resolve, reject)

    }catch(err){
        reject(err);
    }
}
Promise.prototype.then=function(onFulfilled,onRejected){
    let promise2=new Promise((resolve,reject)=>{
        const self=this;
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
        if(this.status===FULLFILLED){
            typeof onFulfilled==='function' && onFulfilled(this.value);
        }
        if(this.status===REJECTED){
            typeof onRejected==='function' && onRejected(this.reason)
        }
        // 当then执行时，如果还是PENDING状态，我们不是马上去执行回调函数，而是将其存储起来
        if(this.status===PENDING){
            typeof onFulfilled==='function' && self.onFulfilled.push(onFulfilled)
            typeof onRejected==='function' && self.onRejected.push(onRejected)
        }
    })
    return promise2;
};
module.exports=Promise;

let p = new Promise((resolve, reject) => {
    console.log('执行了');
    setTimeout(()=>{
        resolve('我成功了')
    },1000)
    // reject('被拒绝了')
}).then('success','fail').then(res=>{
    console.log(res,'------------我是then------')
},err=>{
    console.log(err,'------------我是then-第二个参数-----')
}).then(res1=>{
    console.log(res1,'----------我是then---res1------------')
})

// .catch(err=>{
//     console.log('----我是catch---err----')
// });