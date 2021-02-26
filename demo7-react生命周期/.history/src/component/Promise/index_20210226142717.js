const PENDING='PENDING';
const FULLFILLED='FULLFILLED';
const REJECTED='REJECTED';
function Promise(executor){
    var self=this;
    this.status=PENDING;
    this.value=null;
    this.reason=null;
    function resolve(value){
        if(self.status===PENDING){
            self.status=FULLFILLED;
        }
        
    }
    function reject(reason){
        
    }
    try {
        executor(resolve, reject)

    }catch(err){
        reject(err);
    }
}
Promise.prototype.then=function(onFulfilled,onRejected){

};
module.exports=Promise;

let p = new Promise((resolve, reject) => {
    console.log('执行了');
});