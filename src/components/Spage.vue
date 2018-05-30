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
        /* vertical-align: middle; */
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
            <Layout>
                <!-- <Header :style="{background: '#fff', boxShadow: '0 px 3px 2px rgba(0,0,0,.1)'}">
                </Header> -->
                <Content :style="{padding: '0 16px 16px'}">
                   <div id="class">
                        <h1> 產業類別</h1>
                        <CheckboxGroup class="stockpike"  >
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
                   </div>
                      <CheckboxGroup >
                           <h1> 搜尋條件</h1>
                          <!-- <Checkbox v-model="condition1">周轉率大於</Checkbox>
                          <Input v-model="ConditionValue1" placeholder="Enter something..." clearable style="width: 50px"></Input>% -->
                          <Checkbox v-model="condition2">周波動率-月波動率</Checkbox>
                          <Checkbox v-model="condition3">成交增加量</Checkbox>
                          <Input v-model="ConditionValue3" placeholder="Enter something..." clearable style="width: 50px"></Input>%
                          <Button type="primary" icon="ios-search" v-on:click="show">Search</Button>
                      </CheckboxGroup>

                    <Card v-if="showcard">
                          <ve-bar :data="chartData" :settings="chartSettings"  :events="chartEvents"></ve-bar>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
      import axios from 'axios'
      import slider from './slider.vue';
      export default {
            components: {
                  'slider':slider,
                  },
            data () {
                  this.chartEvents = {
                              click: function (e) {
                              window.location = 'http://localhost:8080/#/Ipage';
                              }
                        }
                        return {
                              // api:'',
                              // catenumber:'',
                              condition1:false,
                              condition2:false,
                              condition3:false,
                              showcard:false,
                              datacollection: null,
                              isCollapsed: false,
                              ConditionValue1: '2',
                              ConditionValue3:'200',
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
                             chartData: {
                              columns: ['name', 'data'],
                              rows: [
                                    { 'name': 'asd', 'data': 0},
                                    { 'name': '', 'data': 0},
                                    { 'name': '', 'data': 0},
                                    { 'name': '', 'data': 0},
                                    { 'name': '', 'data': 0},
                              ]
                                    
                              },
                        
                        }
                  },
            computed: { 
                        menuitemClasses: function () {
                              return [
                                          'menu-item',
                                          this.isCollapsed ? 'collapsed-menu' : '',
                                    ]
                              }
                  }, 
           
            methods: {
                  show:function(event){
                        this.choosestack();
                        this.getdata();
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
                    
                  //   if(this.condition1==true)
                  //       this.api='dp_ratio?bound='+this.ConditionValue1;
                    if(this.condition2==true)
                        this.api='wm_diff?cate='+this.catenumber;
                    if(this.condition3==true)
                          this.api='trade_vol_diff?bound='+this.ConditionValue3+'&cate='+this.catenumber;
                       
                    
                        

                    console.log(this.api)
                   
                },
            getdata() {
                    let _this=this;
                 
                    axios
                        .get('http://163.13.127.53:7153/'+_this.api)
                        .then(response => (this.info = response)) 
                        .then(function(respone){
                        if(respone.data.data[0]!=null){
                             
                              for(var i=0;i<5;i++)
                              {      _this.chartData.rows[i].data=0;
                                     _this.chartData.rows[i].name='';
                              //      console.log(respone.data.data[i].wm_diff)
                                    _this.chartData.rows[i].name=respone.data.data[i].name+respone.data.data[i].security_code;
                                   
                                   if(_this.condition2==true)
                                          _this.chartData.rows[i].data=respone.data.data[i].wm_diff_pct;
                                    else if(_this.condition3==true)
                                    _this.chartData.rows[i].data=respone.data.data[i].vol_diff_rate_pct;
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
      }
      

</script>
