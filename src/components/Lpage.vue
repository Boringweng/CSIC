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
                  <CheckboxGroup class="stockpike" v-model="social">
                              <Checkbox label="01">     
                                    <span>水泥</span>
                              </Checkbox>
                              <Checkbox label="02">      
                                    <span>食品</span>
                              </Checkbox>
                              <Checkbox label="03">      
                                    <span>塑膠</span>
                              </Checkbox>
                              <Checkbox label="04">      
                                    <span>聚紡纖維</span>
                              </Checkbox>
                              <Checkbox label="05">      
                                    <span>電機機械</span>
                              </Checkbox>
                              <Checkbox label="06">      
                                    <span>電器電纜</span>
                              </Checkbox>
                              <Checkbox label="07">      
                                    <span>生化科技</span>
                              </Checkbox>
                              <Checkbox label="08">      
                                    <span>化工</span>
                              </Checkbox>
                              <Checkbox label="09">      
                                    <span>生技醫療</span>
                              </Checkbox>
                              <Checkbox label="10">      
                                    <span>玻璃陶瓷</span>
                              </Checkbox>
                              <Checkbox label="11">      
                                    <span>造紙</span>
                              </Checkbox>	
                              <Checkbox label="12">      
                                    <span>鋼鐵</span>
                              </Checkbox>
                              <Checkbox label="13">      
                                    <span>橡膠</span>
                              </Checkbox>
                              <Checkbox label="14">      
                                    <span>汽車</span>
                              </Checkbox>
                              <Checkbox label="15">      
                                    <span>電子全部</span>
                              </Checkbox>
                              <Checkbox label="16">      
                                    <span>半導體</span>
                              </Checkbox>	
                              <Checkbox label="17">      
                                    <span>電腦與周邊</span>
                              </Checkbox>
                              <Checkbox label="18">      
                                    <span>光電</span>
                              </Checkbox>
                              <Checkbox label="19">      
                                    <span>通信網路</span>
                              </Checkbox>
                              <Checkbox label="20">      
                                    <span>電子零組件</span>
                              </Checkbox>
                              <Checkbox label="21">      
                                    <span>電子通路</span>
                              </Checkbox>
                              <Checkbox label="22">      
                                    <span>資訊服務</span>
                              </Checkbox>
                              <Checkbox label="23">      
                                    <span>其他電子</span>
                              </Checkbox>
                              <Checkbox label="24">      
                                    <span>建材營造</span>
                              </Checkbox>
                              <Checkbox label="25">      
                                    <span>航運業</span>
                              </Checkbox>
                              <Checkbox label="26">      
                                    <span>餐飲業</span>
                              </Checkbox>
                              <Checkbox label="27">      
                                    <span>金融保險</span>
                              </Checkbox>
                              <Checkbox label="28">      
                                    <span>貿易百貨</span>
                              </Checkbox>
                              <Checkbox label="29">      
                                    <span>油電燃氣</span>
                              </Checkbox>
                              <Checkbox label="30">      
                                    <span>存託憑證</span>
                              </Checkbox>
                              <Checkbox label="31">      
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
                   
                    
                    <CheckboxGroup v-model="fruit">
                          <h1> 搜尋條件</h1>
                          <Checkbox label="股利發放大於"></Checkbox>
                          <Input v-model="value14" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox label="本益比大於"></Checkbox>
                          <Input v-model="value13" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox label="殖利率小於"></Checkbox>
                          <Input v-model="value12" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Button type="primary" icon="ios-search"  v-on:click="show">Search</Button>
                      </CheckboxGroup>
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
      import slider from './slider.vue';
      
      import D3Network from 'vue-d3-network';
      export default {
               components: {
                  'slider':slider,
                  D3Network
        
                  },
            methods: {
                  show:function(event){
                        this.showcard=true
                  },
                    nodeClick (event, nodes){
                          
                    window.location = 'http://localhost:8080/#/Ipage';
            },
            },
            data () {
            return {
                  showcard:false,
                isCollapsed: false,              
                formValidate: {
                                 date: '',   
                },
                ruleValidate: {
                       date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    
                },
                value14: '85%',
                value13: '15',
                value12: '4.5%',
                 nodes: [
                        { id: 1, name: '大將',_size:70,_color: 'red'},
                        { id: 2, name: '潤泰全',_size:60},
                        { id: 3, name:'宜進',_size:50, _color: 'orange' },
                        { id: 4, name:'東森',_size:40,_color: '#0022ff'},
                        { id: 5,name:'群創',_size:30 },
                        { id: 6,name:'友達',_size:20 },
                        { id: 7,name:'上曜',_size:10 },
                        { id: 8 },
                        { id: 9 },
                        { id:10}
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
                  { sid: 7, tid: 9 },
                  { sid: 8,tid:10},
                  ],
                  nodeSize:40,
                  canvas:false,
                  stock1:'水泥',
            };
        },
        
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
            
            options(){
                  return{
                  force: 3000,
                  size:{ w:600, h:600},
                  nodeSize: this.nodeSize,
                  nodeLabels: true,
                  canvas: this.canvas
                  }
            }
        }
    }
</script>
