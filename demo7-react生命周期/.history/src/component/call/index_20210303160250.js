var name='heihei';
var obj={
    name:'king',
    say:function(){
        console.log(this.name)
    }
}
function getName(){
    console.log(this,'--this--------')
    console.log(window.name,'-----dasdasdasdas')
}
getName();