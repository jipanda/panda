new Vue({
	el:'#app',
	data:{
		newtodo:'',
		todos:[
			{text:'panda'}
		]		
	},
	methods:{
		removeli:function(index){
			this.todos.splice(index,1);
		},
		addli:function(){
			var newtext = this.newtodo.trim();
			if (newtext) {
				this.todos.push({text:newtext});
				this.newtodo = '';
			}
		}		
	}

})