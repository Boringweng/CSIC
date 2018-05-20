<template>
  <div id="app" class="wrap">
  
   <p>{{hi}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
    return{
      hi:'sdasa'
      }
    },
    created(){
      this.getdata();
    },
   methods:{
     getdata () {
       this.hi='loading';
       axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
       .then(function (response){
            this.hi=response.data[0];
       })
       .catch(function (error){
           console.log(error);
       })
      }
   }


}

</script>