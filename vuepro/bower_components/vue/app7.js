
//$wacth
/*var vm = new Vue({
    el:"#app",
    data:{
    	firstName:'Ji',
    	lastName:'panda',
    	fullName:'Jipanda'
    }
})
vm.firstName = 'ji'
// console.log(vm.fullName)
vm.$watch('firstName',function(val){
	this.fullName = val + this.lastName
})*/


//计算属性
/*var vm = new Vue({
    el:"#app",
    data:{
    	firstName:'Ji',
    	lastName:'panda'
    },
    computed:{
    	fullName:function(){
    		return this.fullName = this.firstName + this.lastName
    	}
    }
})
    vm.firstName = 'Mr';
    vm.lastName = '.he';*/

//计算setter
var vm = new Vue({
    el:"#app",
    data:{
    	firstName:'Ji',
    	lastName:'panda'
    },
    computed:{
    	fullName:{
    		//getter
    		get:function(){
	    		return this.firstName + this.lastName
	    	},
	    	// setter
	    	set:function(newval){
	    		var names = newval.split(' ');
	    		this.firstName = names[0];
	    		this.lastName = names[1];
	    	}
    	}
    }
})
     vm.fullName = 'ji panda';
