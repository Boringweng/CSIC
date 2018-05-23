<template>
  <div id="app" class="wrap">
  
    <p>{{info}}</p>
    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
    <button v-on:click='movetoIpage'> toIpage with stocknumber</button>
  </div>
</template>

<script>
import axios from 'axios'
import D3Network from 'vue-d3-network';
import { mapState } from 'vuex'
export default {
    component(){
      D3Network
    },
    data(){
    return{
      info:'sdasa',
      nodedate:['']
      }
    },
    created(){
      this.getdata();
    },
   methods:{
     movetoIpage:function(event){
        
     },
     getdata () {
       this.info='loading';
          axios
            .get('http://163.13.127.53:7153/pe_ratio')
            // .then(response => (this.info = response))
            .then(function(imputdata)
            {
              this.nodedate=response.data;
            })
            .catch(function (error){
              console.log(error);
            })
      }
   }


}

</script>