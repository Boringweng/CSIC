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
                
                <Menu active-name="1-1" theme="dark" width="auto" :class="menuitemClasses">
                         
                   <router-link to="Lpage">      
                        <MenuItem name="1-1">
                           <span>長期投資</span>
                        </MenuItem>
                   </router-link>
                    <router-link to="Spage">
                        <MenuItem name="1-2">
                            <!-- <Icon type="search"></Icon> -->
                            <span>短期投資</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="Ipage">
                        <MenuItem name="1-3">
                            <!-- <Icon type="search"></Icon> -->
                            <span>公司資訊</span>
                        </MenuItem>
                    </router-link>
                </Menu>
            </Sider>
            <Layout>
                <!-- <Header :style="{background: '#fff', boxShadow: '0 px 3px 2px rgba(0,0,0,.1)'}">
                </Header> -->
                <Content :style="{padding: '0 16px 16px'}">
                    <h1>產業類別</h1>
                     <CheckboxGroup class="stockpike" v-model="social" >
                        <Checkbox label="facebook">     
                            <span>水泥</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>食品</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>塑膠</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>聚紡纖維</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>電機機械</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>電器電纜</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>生化科技</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>化工</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>生技醫療</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>玻璃陶瓷</span>
                        </Checkbox>
                       	<Checkbox label="github">      
                              <span>造紙</span>
                        </Checkbox>	
                        <Checkbox label="github">      
                              <span>鋼鐵</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>橡膠</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>汽車</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>電子全部</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>半導體</span>
                        </Checkbox>	
                        <Checkbox label="github">      
                              <span>電腦與周邊</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>光電</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>通信網路</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>電子零組件</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>電子通路</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>資訊服務</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>其他電子</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>建材營造</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>航運業</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>餐飲業</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>金融保險</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>貿易百貨</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>油電燃氣</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>存託憑證</span>
                        </Checkbox>
                        <Checkbox label="github">      
                              <span>其他</span>
                        </Checkbox>	
                      										
                    </CheckboxGroup>
                    <Form class="datepike" :model="formItem" >
                            <FormItem label="Date">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>
                                </FormItem>                   
                            </FormItem>
                    </Form>    
                    
                   
                    
                    <CheckboxGroup v-model="fruit">
                          <h1> 搜尋條件</h1>
                          <Checkbox label="股利發放大於"></Checkbox>
                          <Input v-model="value14" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox label="本益比大於"></Checkbox>
                          <Input v-model="value13" placeholder="Enter something..." clearable style="width: 50px"></Input>
                          <Checkbox label="殖利率小於"></Checkbox>
                          <Input v-model="value12" placeholder="Enter something..." clearable style="width: 50px"></Input>
                      </CheckboxGroup>
                       <Button type="primary" icon="ios-search">Search</Button>
                    <Card>
                        <svg height="100vh" width="100vw">
                         <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
                        </svg>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    export default {
        
        data () {
            return {
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
            };
        },
        computed: {
            menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        }
    }
</script>
