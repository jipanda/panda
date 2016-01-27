new Vue({
    el:"#app",
    data:{
      message:'Hello panda!'
    },
    methods:{
        Reverse:function(){
           this.message = this.message.split('').reverse().join('');
        }
    }
})