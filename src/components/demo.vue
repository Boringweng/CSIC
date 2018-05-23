<template>
  <div id="app" class="wrap">
    <button v-on:click='movetoIpage'> toIpage with stocknumber</button>
    <button v-on:click='getdata'> getdatar</button> 
    <p>{{info}}</p>
    <Card>
    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" />
    </Card>
  </div>
</template>

<script>
import axios from 'axios'
import D3Network from 'vue-d3-network';
import { mapState } from 'vuex';
var nodename=[''];
var i;
export default {
    components: {
      D3Network
    },
    data(){
    return{
      info:'sdasa',
      nodename:'',
      nodes: [
                        { id: 1, name:'',_color: '#0022ff'},
                        { id: 2, name:'sadas'},
                        { id: 3, name:''},
                        { id: 4, name:''},
                        { id: 5, name:''},
                        { id: 6, name:''},
                        { id: 7, name:''},
                        { id: 8, name:''},
                        { id: 9, name:''},
                        { id: 10, name:''},
                        ],
                  links: [
                  { sid: 1, tid: 2 },
                  { sid: 2, tid: 8 },
                  { sid: 3, tid: 4 },
                  { sid: 4, tid: 5 },
                  { sid: 5, tid: 6 },
                  { sid: 7, tid: 8 },
                  { sid: 5, tid: 8 },
                  { sid: 3, tid: 8 },
                  { sid: 7, tid: 9 }
                  ],
                  nodeSize:40,
                  canvas:false,
      }
    },
    computed:{
      options(){
                  return{
                  force: 3000,
                  size:{ w:600, h:600},
                  nodeSize: this.nodeSize,
                  nodeLabels: true,
                  canvas: this.canvas
                  }
            }
    },
    created(){
      this.getdata();
    },
   methods:{
     movetoIpage:function(event){
        alert(nodename[0])
     },
     getdata () {
       let _this = this
       this.info='loading';
          axios
            .get('http://163.13.127.53:7153/pe_ratio')
            .then(response => (this.info = response)) 
            .then(function(respone){
             
              for(i=0;i<10;i++)
              {
                alert('hi');
                _this.nodes[i].name=response.data[i].name;
              }
            })
            
            .catch(function (error){
              console.log(error);
            })
      }
   }
 
 
}
 
</script>


}

</script>