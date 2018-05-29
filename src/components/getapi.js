import axios from 'axios'

export default function() {
    method:{
        getdata () {
            let _this=this;
            this.info='loading';
               var api='pe_ratio';
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