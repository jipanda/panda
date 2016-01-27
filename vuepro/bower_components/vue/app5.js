var obj = {message:'hello panda!'}
var vm = new Vue({
    el:"#app",
    data:obj
})
     // alert(vm.message === obj.message)
    vm.message = 'hello Mr.he'; //vm实例会代理其对象里面的属性
    vm.$watch('message',function(){
    	alert(obj.message)
    })