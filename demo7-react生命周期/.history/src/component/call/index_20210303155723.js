var name='heihei';
var obj={
    name:'king',
    say:function(){
        console.log(this.name)
    }
}
function getName(){
    console.log(this.name)
}
getName();