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
    <div id="Lpage" class="layout">
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed">
                  <slider></slider>
            </Sider>
            <Layout>
                <!-- <Header :style="{background: '#fff', boxShadow: '0 px 3px 2px rgba(0,0,0,.1)'}">
                </Header> -->
                <Content :style="{padding: '0 16px 16px'}">
                  <h1>產業類別</h1>
                  <CheckboxGroup class="stockpike" >
                              <Checkbox v-model="stock1">     
                                    <span>水泥</span>
                              </Checkbox>
                              <Checkbox v-model="stock2">      
                                    <span>食品</span>
                              </Checkbox>
                              <Checkbox v-model="stock3">
                                    <span>塑膠</span>
                              </Checkbox>
                              <Checkbox v-model="stock4">      
                                    <span>聚紡纖維</span>
                              </Checkbox>
                              <Checkbox v-model="stock5">      
                                    <span>電機機械</span>
                              </Checkbox>
                              <Checkbox v-model="stock6">      
                                    <span>電器電纜</span>
                              </Checkbox>
                              <Checkbox v-model="stock7">      
                                    <span>生化科技</span>
                              </Checkbox>
                              <Checkbox v-model="stock8">      
                                    <span>化工</span>
                              </Checkbox>
                              <Checkbox v-model="stock9">      
                                    <span>生技醫療</span>
                              </Checkbox>
                              <Checkbox v-model="stock10">      
                                    <span>玻璃陶瓷</span>
                              </Checkbox>
                              <Checkbox v-model="stock11">      
                                    <span>造紙</span>
                              </Checkbox>	
                              <Checkbox v-model="stock12">      
                                    <span>鋼鐵</span>
                              </Checkbox>
                              <Checkbox v-model="stock13">      
                                    <span>橡膠</span>
                              </Checkbox>
                              <Checkbox v-model="stock14">      
                                    <span>汽車</span>
                              </Checkbox>
                              <Checkbox v-model="stock15">      
                                    <span>電子全部</span>
                              </Checkbox>
                              <Checkbox v-model="stock16">      
                                    <span>半導體</span>
                              </Checkbox>	
                              <Checkbox v-model="stock17">      
                                    <span>電腦與周邊</span>
                              </Checkbox>
                              <Checkbox v-model="stock18">      
                                    <span>光電</span>
                              </Checkbox>
                              <Checkbox v-model="stock19">      
                                    <span>通信網路</span>
                              </Checkbox>
                              <Checkbox v-model="stock20">      
                                    <span>電子零組件</span>
                              </Checkbox>
                              <Checkbox v-model="stock21">      
                                    <span>電子通路</span>
                              </Checkbox>
                              <Checkbox v-model="stock22">      
                                    <span>資訊服務</span>
                              </Checkbox>
                              <Checkbox v-model="stock23">      
                                    <span>其他電子</span>
                              </Checkbox>
                              <Checkbox v-model="stock24">      
                                    <span>建材營造</span>
                              </Checkbox>
                              <Checkbox v-model="stock25">      
                                    <span>航運業</span>
                              </Checkbox>
                              <Checkbox v-model="stock26">      
                                    <span>餐飲業</span>
                              </Checkbox>
                              <Checkbox v-model="stock27">      
                                    <span>金融保險</span>
                              </Checkbox>
                              <Checkbox v-model="stock28">      
                                    <span>貿易百貨</span>
                              </Checkbox>
                              <Checkbox v-model="stock29">      
                                    <span>油電燃氣</span>
                              </Checkbox>
                              <Checkbox v-model="stock30">      
                                    <span>存託憑證</span>
                              </Checkbox>
                              <Checkbox v-model="stock31">      
                                    <span>其他</span>
                              </Checkbox>	
                                                                                    
                        </CheckboxGroup>
                    <!-- <Form class="datepike" :model="formItem" >
                            <FormItem label="Date">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>                   
                            </FormItem>
                    </Form>    
                     -->
                   
                    
                    <CheckboxGroup >
                          <h1> 搜尋條件</h1>
                          <Checkbox v-model="condition1">股利發放大於</Checkbox>
                          <Input v-model="ConditionValue1" placeholder="Enter something..." clearable style="width: 50px"></Input>%
                          <Checkbox v-model="condition2">本益比大於</Checkbox>
                          <Input v-model="ConditionValue2" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox v-model="condition3">殖利率小於</Checkbox>
                          <Input v-model="ConditionValue3" placeholder="Enter something..." clearable style="width: 50px"></Input>%
                        
                      </CheckboxGroup>
                       <Button type="primary" icon="ios-search"  v-on:click="show">Search</Button> 
                    <Card v-if="showcard">
                        <d3-network 
                        ref='net' 
                        :net-nodes="nodes"
                        :net-links="links" 
                        :options="options"
                        @node-click="nodeClick"
                          />

                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import axios from 'axios'
    import slider from './slider.vue';

    import D3Network from 'vue-d3-network';
    export default {
               components: {
                  'slider':slider,
                  D3Network,
                },
            methods: {
                  show:function(event){
                        
                        this.choosestack();
                        this.getdata();
                },
                    nodeClick (event, nodes){

                        //   console.log(this.Ipage.security_code)
                        // // this.$set(this.Ipage.security_code,security_code,nodes.security_code);
                        //  //this.$set(this.Ipage.name,security_code,nodes.name);
                        //   alert(_this.choosename);
                        //   APP.name=nodes.name;
                        // alert('股票代號是  '+nodes.security_code)
                         window.location = 'http://localhost:8080/#/Ipage';
                        //console.log(APP.name)
                        
                },
                choosestack(){
                    let _this=this;
                    if(this.stock1==true)
                        _this.catenumber=1;
                    else if (this.stock2==true)
                       _this.catenumber=2;
                     else if (this.stock3==true)
                       _this.catenumber=3;
                     else if (this.stock4==true)
                       _this.catenumber=4;
                     else if (this.stock5==true)
                       _this.catenumber=5;
                     else if (this.stock6==true)
                       _this.catenumber=6;
                     else if (this.stock7==true)
                       _this.catenumber=7;
                     else if (this.stock8==true)
                       _this.catenumber=8;
                     else if (this.stock9==true)
                       _this.catenumber=9;
                     else if (this.stock10==true)
                       _this.catenumber=10;
                     else if (this.stock11==true)
                       _this.catenumber=11;
                     else if (this.stock12==true)
                       _this.catenumber=12;
                     else if (this.stock13==true)
                       _this.catenumber=13;
                     else if (this.stock14==true)
                       _this.catenumber=14;
                     else if (this.stock15==true)
                       _this.catenumber=15;
                     else if (this.stock16==true)
                       _this.catenumber=16;
                     else if (this.stock17==true)
                       _this.catenumber=17;
                     else if (this.stock18==true)
                       _this.catenumber=18;
                     else if (this.stock19==true)
                       _this.catenumber=19;
                     else if (this.stock20==true)
                       _this.catenumber=20;
                     else if (this.stock21==true)
                       _this.catenumber=21;
                     else if (this.stock22==true)
                       _this.catenumber=22;
                     else if (this.stock23==true)
                       _this.catenumber=23;
                     else if (this.stock24==true)
                       _this.catenumber=24;
                     else if (this.stock25==true)
                       _this.catenumber=25;
                     else if (this.stock26==true)
                       _this.catenumber=26;
                     else if (this.stock27==true)
                       _this.catenumber=27;
                     else if (this.stock28==true)
                       _this.catenumber=28;
                     else if (this.stock29==true)
                       _this.catenumber=29;
                     else if (this.stock30==true)
                       _this.catenumber=30;
                     else if (this.stock31==true)
                       _this.catenumber=31;
                    
                    if(this.condition1==true)
                        this.api='dp_ratio?bound='+this.ConditionValue1;
                    if(this.condition2==true)
                        this.api='pe_ratio?bound='+this.ConditionValue2;
                    if(this.condition3==true)
                        this.api='div_yield?bound='+this.ConditionValue3;
                    this.api=this.api+'&cate='+this.catenumber;

                    console.log(this.api)
                   
                },
                getdata() {
                    let _this=this;
                 
                    axios
                        .get('http://163.13.127.53:7153/'+_this.api)
                        .then(response => (this.info = response)) 
                        .then(function(respone){
                        if(respone.data.data[0]!=null){
                              for(var i=0;i<10;i++)
                              {     
                                    // if(respone.data.data[i]!=null)
                              // this.nodename[i].push(data[0].test);
                                          _this.nodes[i].name=respone.data.data[i].name +" "+respone.data.data[i].security_code;
                                          // _this.nodes[i].security_code=respone.data.data[i].security_code;
                                    // else  {
                                    //        _this.nodes[i]._color='white';
                                    //        _this.nodes[i]._size=0;

                                    // }
                                    
                              
                              }
                              _this.showcard=true
                        }
                        else{ 
                              alert('請修改條件沒有在條件內的值');
                              _this.showcard=false;
                              }
                        })
                        .catch(function (error){
                       // alert(error);
                        console.log(error);
                        })
                  
                }  
            },
            data () {
            return {
                api:'',
                catenumber:'',
                choosename:'',
                
                showcard:false,
                single:false,
                isCollapsed: false,              
                // formValidate: {
                //                  date: '',   
                // },
                // ruleValidate: {
                //        date: [
                //         { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                //     ],
                    
                // },
               condition1:false,
               condition2:false,
               condition3:false,
               ConditionValue1: '75',
               ConditionValue2: '15',
               ConditionValue3: '4.5',
                 nodes: [
                        { id: 1, name:'',_color:'#000066',_size:85,security_code:''},
                        { id: 2, name:'',_color:'#0f1a70',_size:80,security_code:''},
                        { id: 3, name:'',_color:'#264080',_size:80,security_code:''},
                        { id: 4, name:'',_color:'#3d668f',_size:70,security_code:''},
                        { id: 5, name:'',_color:'#4c8099',_size:60,security_code:''},
                        { id: 6, name:'',_color:'#548c9e',_size:50,security_code:''},
                        { id: 7, name:'',_color:'#63a6a8',_size:40,security_code:''},
                        { id: 8, name:'',_color:'#73bfb2',_size:30,security_code:''},
                        { id: 9, name:'',_color:'#82d9bd',_size:20,security_code:''},  
                        { id: 10, name:'',_color:'#99ffcc',_size:10,security_code:''},
                        
                        ],
                  links: [
                  { sid: 1, tid: 2 },
                  { sid: 2, tid: 3 },
                  { sid: 3, tid: 4 },
                  { sid: 4, tid: 5 },
                  { sid: 5, tid: 6 },
                  { sid: 6, tid: 7 },
                  { sid: 7, tid: 8 },
                  { sid: 8, tid: 9 },
                  { sid: 9, tid: 10 },
                  // { sid: 10, tid: 1 },
       
                  ],
                  nodeSize:40,
                  canvas:false,
                stock1:false,
                stock2:false,
                stock3:false,
                stock4:false,
                stock5:false,
                stock6:false,
                stock7:false,
                stock8:false,
                stock9:false,
                stock10:false,
                stock11:false,
                stock12:false,
                stock13:false,
                stock14:false,
                stock15:false,
                stock16:false,
                stock17:false,
                stock18:false,
                stock19:false,
                stock20:false,
                stock21:false,
                stock22:false,
                stock23:false,
                stock24:false,
                stock25:false,
                stock26:false,
                stock27:false,
                stock28:false,
                stock29:false,
                stock30:false,
                stock31:false,
               
            };
        },
        
        computed: {
          
            
            options(){
                  return{
                  force: 3000,
                  size:{ w:1000, h:600},
                  nodeSize: this.nodeSize,
                  nodeLabels: true,
                  canvas: this.canvas
                  }
            }
        }
    }
</script>
