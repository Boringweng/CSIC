<style scoped>
    .layout-con{
        height: 100%;
        width: 100%;
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 80px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
</style>
<template>
    <div class="layout">
        <Layout :style="{minHeight: '100vh'}">
           <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                <slider></slider>
            </Sider>
                <!-- <Header :style="{background: '#fff', boxShadow: '0 px 3px 2px rgba(0,0,0,.1)'}">
                </Header>  -->
                <Content :style="{padding: '0 16px 16px'}">
                        <h2>股票搜尋  
                            <AutoComplete
                            v-model="security_code"
                            :data="data3"
                            placeholder="input here"
                            style="width:200px">
                            </AutoComplete>
                            <Button type="primary" icon="ios-search"  v-on:click="getdata">Search</Button>
                        </h2>
                        
                        
                        <Card>
                        <Row>
                            <Col span="8">
                            <h2>股票名稱:{{name}}</h2>
                            </Col>
                            <!-- <Col span="8">
                            <h2>截止日期:{{}}</h2>
                            </Col> -->
                        </Row>
                        <Row>   
                            <Col span="24">
                            <Table :columns="columns1" :data="tabledata"></Table>
                            </Col>
                        </Row>
                        <Row>
                             <Tabs>
                              
                                
                                <TabPane label="K線圖">
                                    <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>                          
                                </TabPane>       
                                
                                <!-- <TabPane label="基本資訊">标签二的内容</TabPane>
                                <TabPane label="歷年股利">标签二的内容</TabPane>
                                <TabPane label="除權息資訊">标签二的内容</TabPane> -->
                                 
                            </Tabs>
                        </Row>
                       
                        </Card>
                    
                </Content>
            </Layout>
      
    </div>
</template>
<script>
 import slider from './slider.vue';
//   import APP from '../APP.vue';   
 import axios from 'axios'
    export default {
        components: {
                  'slider':slider,
                          
                  },
       
        data () {
            return {

               
                chartData:{
                    columns: ['日期', 'open', 'close', 'lowest', 'highest', 'vol'],
                    rows:[
                    ['',,, , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ['', , , , , ],
                    ]
                },
                isCollapsed: false,
                security_code:'',
                name:"",
                data3: ['1101', '2498', '2330'],
                 columns1: [
                    {
                        title: '日期',
                        key: 'date',
                        // sortable: true
                    },
                  
                    {
                        title: '開盤價',
                        key: 'open'
                    },
                   
                    {
                        title: '收盤價',
                        key: 'close',
                       
                    },
                    {
                        title: '最低價',
                        key: 'lowest',
                       
                    },
                    {
                        title: '最高價',
                        key: 'highest',
                       
                    },
                    {
                        title: '成交量',
                        key: 'vol',
                       
                    },   
                ],
                 tabledata:[
                    {
                       date:'',
                       open:'',
                       close:'',
                       lowest:'',
                       highest:'',
                       vol:'',
                     
                    }

                ],
                
                
            };
        },
        computed: {
            created(){
                this.setnumber();
            },
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods:{
            setnumber() {
                let _this=this;
            //  this.name ='大將';
            // _this.name=APP.name;
             
            },
            getdata () {
         let _this=this;
         var i;
         var api='ohlc/'+this.security_code;
         console.log('security_code:'+this.security_code);
         var lis = ['日期', 'open', 'close', 'lowest', 'highest', 'vol'];
          axios
            .get('http://163.13.127.53:7153/'+api)
            .then(response => (this.info = response)) 
            .then(function(respone){
           
              for(i=0;i<37;i++)
              {
                   
                _this.chartData.rows[36-i][0]=respone.data.data[i].date;
    
                _this.chartData.rows[36-i][1]=respone.data.data[i].open_price;
                _this.chartData.rows[36-i][2]=respone.data.data[i].close_price;
                _this.chartData.rows[36-i][3]=respone.data.data[i].low_price;
                _this.chartData.rows[36-i][4]=respone.data.data[i].high_price;
                _this.chartData.rows[36-i][5]=respone.data.data[i].trade_volume;
                            
              }
              _this.tabledata[0].date=respone.data.data[0].date;
              _this.tabledata[0].open=respone.data.data[0].open_price;
              _this.tabledata[0].close=respone.data.data[0].close_price;
              _this.tabledata[0].lowest=respone.data.data[0].low_price;
              _this.tabledata[0].highest=respone.data.data[0].high_price;
              _this.tabledata[0].vol=respone.data.data[0].trade_volume;
              _this.name=respone.data.data[0].name;
              
                _this.change()
                    
            })
            .catch(function (error){
              console.log(error);
              })
              
        
          
      },
      change(){
                var lis = ['日期', 'open', 'close', 'lowest', 'highest', 'vol'];
                    for (var i = 0; i <= lis.length - 1; i++) {
                        this.$set(this.chartData.columns,i,lis[i]);
                      
                    }
             },
        },
         chartSettings(){}
    }
</script>
