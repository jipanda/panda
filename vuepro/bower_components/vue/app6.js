var obj = {message:'<h3>hello panda!</h3>',url:'https://www.baidu.com'}
var vm = new Vue({
    el:"#app",
    data:obj,
    methods:{
    	tips:function(){
    		alert('click 事件')
    	}
    }
})

