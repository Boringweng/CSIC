<template>
  <div id="app" class="wrap">
    <button v-on:click='movetoIpage'> toIpage with stocknumber</button>
    <button v-on:click='getdata'> getdatar</button>
   <Checkbox v-model="single">Checkbox</Checkbox>
   <Checkbox v-model="single2">numbertwo</Checkbox>
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
// import getapi from './getapi.js'
var nodename=[{name:''
}];

export default {
    components: {
      D3Network,
      getapi,
    },
    data(){
    return{
      single:false,
      single2:false,
      info:'sdasa',
      nodename:[],
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
      
    },
   methods:{
     movetoIpage:function(event){
        this.info=this.nodes[0].name;
        
     },
     
     getdata () {
       let _this=this;
       this.info='loading';
          var api='pe_ratio?bound=30&cate=1';
          if(_this.single)
          {
          axios
            .get('http://163.13.127.53:7153/'+api)
            .then(response => (this.info = response)) 
            .then(function(respone){
             
              for(var i=0;i<10;i++)
              {
                // this.nodename[i].push(data[0].test);
                _this.nodes[i].name=respone.data.data[i].name;
              }
            })
            .catch(function (error){
              console.log(error);
            })
          }
          else
          {
            alert('checkbook');
          }
      }
   }
 
 
}
 
</script>


}

</script>