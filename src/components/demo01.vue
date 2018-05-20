<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data(){
      stock:[]
  },
  created(){
    this.$http.get('http://163.13.127.53:7153/div_yield').then(function(data){
        console.log(data)
    })

  }
}
</script>
