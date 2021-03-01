const PENDING='pending';
const REJECTED='rejected';
const FULLFILLED='fullfilled'
function MyPromise(executor){
    const self=this;
    self.value=undefined;
    self.reason=undefined;
    self.status=PENDING;
    self.onFulfilled=[];//成功的回调
    self.onRejected=[]; //失败的回调
    function resolve(value){
        if(self.status===PENDING){
            self.status=FULLFILLED;
            self.value=value
        }
    }
    function reject(reason){
        self.status=REJECTED;
        self.reason=reason;
    }
    try {
        executor(resolve,reject)
    }catch(e) {
        reject(e)
    }
}
MyPromise.prototype.then=function(onFulfilled,onRejected){
    onFulfilled=typeof onFulfilled==='function' ? onFulfilled : value=>value;
    onRejected=typeof onRejected==='function' ? onRejected : reason=>{throw reason};
    let promise2 = new Promise((resolve, reject) => {
        if(self.status===FULLFILLED){
            setTimeout(()=>{
                try {
                    let x = onFulfilled(self.value);
                    resolvePromise(promise2, x, resolve, reject);
                }catch(err){
                    reject(err)
                }
            })
        }else if(self.status===REJECTED){
            setTimeout(()=>{
                try {
                    let x = onRejected(self.reason);
                    resolvePromise(promise2, x, resolve, reject);
                }catch(err){
                    reject(err)
                }
            })
        }else if (self.status === PENDING) {
            self.onFulfilled.push(()=>{
                setTimeout(() => {
                    try {
                        let x = onFulfilled(self.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            self.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(self.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            })
        }

    });
    return promise2;
}
function resolvePromise(promise2, x,resolve, reject){

}
module.exports=MyPromise;