const PENDING='PENDING';
const FULLFILLED='FULLFILLED';
const REJECTED='REJECTED';
function Promise(executor){
    var _this=this;
    this.statue=PENDING;
    this.value=null;
    this.reason=null;
    function resolve(value){
        
    }
    function reject(reason){
        
    }
    executor(resolve,reject)

}
Promise.prototype.then=function(onFulfilled,onRejected){
    
}
module.exports=Promise;