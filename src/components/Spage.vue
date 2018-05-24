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
                        <CheckboxGroup class="stockpike" v-model="social" >
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
                   </div>
                      <CheckboxGroup v-model="fruit">
                           <h1> 搜尋條件</h1>
                          <Checkbox label="周轉率大於"></Checkbox>
                          <Input v-model="value14" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox label="周波動率>月波動率"></Checkbox>
                        
                          <Checkbox label="量增"></Checkbox>
                          <Input v-model="value12" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Button type="primary" icon="ios-search" v-on:click="show">Search</Button>
                      </CheckboxGroup>

                    <Card v-if="showcard">
                        <bubble-example />
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
      import BubbleExample from './Bubble'
      import slider from './slider.vue';
      export default {
            components: {
                  'slider':slider,
                  BubbleExample
                  },
            data () {
                        return {
                              showcard:false,
                              datacollection: null,
                              isCollapsed: false,
                              value14: '2%',
                              value12:'200%',
                        };
                  },
            computed: { 
                        menuitemClasses: function () {
                              return [
                                          'menu-item',
                                          this.isCollapsed ? 'collapsed-menu' : '',
                                    ]
                              }
                  }, 
            mounted () {
                  this.fillData()
             },
            methods: {
                  show:function(event){
                        this.showcard=true
                  },
                  fillData () {
                  this.datacollection = {
                        labels: [this.getRandomInt(), this.getRandomInt()],
                        datasets: [
                              {
                                    label: 'Data One',
                                    backgroundColor: '#f87979',
                                    data: [this.getRandomInt(), this.getRandomInt()]
                              }, 
                              {
                                    label: 'Data One',
                                    backgroundColor: '#f87979',
                                    data: [this.getRandomInt(), this.getRandomInt()]
                              }
                        ]
                  }
            },
            getRandomInt () {
                  return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
      }
}
</script>
