var age='heihei';
var obj={
    name:'king',
    say:function(){
        console.log(this.age)
    }
}
function getName(){
    console.log(this,'--this--------')
    console.log(window.age,'-----dasdasdasdas')
}
getName();