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
                            v-model="stacknumber"
                            :data="data3"
                            :filter-method="filterMethod"
                            placeholder="input here"
                            style="width:200px">
                            </AutoComplete>
                            <Button type="primary" icon="ios-search">Search</Button>
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
                            <Table :columns="columns1" :data="data1"></Table>
                            </Col>
                        </Row>
                        <Row>
                             <Tabs>
                              
                                
                                <TabPane label="K線圖">
                                    <img src="./K線圖.png"></img>                                  
                                </TabPane>       
                                
                                <TabPane label="基本資訊">标签二的内容</TabPane>
                                <TabPane label="歷年股利">标签二的内容</TabPane>
                                <TabPane label="除權息資訊">标签二的内容</TabPane>
                                 
                            </Tabs>
                        </Row>
                       
                        </Card>
                    
                </Content>
            </Layout>
      
    </div>
</template>
<script>
 import slider from './slider.vue';
    export default {
        components: {
                  'slider':slider,        
                  },
       
        data () {
            return {
                data1:[
                    {
                       a:'933',
                       
                       d:'9.95',
                      
                       f:'9.91',
                      
                       
                    }

                ],
                isCollapsed: false,
                stacknumber: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
                 columns1: [
                    {
                        title: '成交量',
                        key: 'a',
                        // sortable: true
                    },
                  
                    {
                        title: '最高',
                        key: 'd'
                    },
                   
                    {
                        title: '開盤',
                        key: 'f',
                       
                    },
                    
                    
                ],
                name:"大將",
                date:"",
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
             this.name ='大將';
            this.date='2018/5/23';
             
            }
        },
    }
</script>
