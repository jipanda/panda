/*var vm = new Vue({
    el:'#app',
    data:{
        ok:true
    }
})*/
var vm1 = new Vue({
    el:'#app',
    data:{
       items:[
          {msg:'vuejs11'},
          {msg:'vuejs22'},
          {msg:'vuejs333'}
       ],
       object:{
            FirstName:'ji',
            LastName:'panda',
            Age:'26'
       }
    }
})
// vm1.items.push({msg:'hahaha'}) 
// vm1.items.pop()
vm1.items.$set(0,{msg:'超级无敌'})  //$set(index,item) 用索引设置数组项
vm1.items.$remove(vm1.items[1])  //$remove()移除数组项
