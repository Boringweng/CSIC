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
                
                <Menu active-name="1-3" theme="dark" width="auto" :class="menuitemClasses">
                         
                   <router-link to="Lpage">      
                        <MenuItem name="1-1">
                           <Icon type="calendar"></Icon>
                           <span>長期投資</span>
                        </MenuItem>
                   </router-link>
                    <router-link to="Spage">
                        <MenuItem name="1-2">
                            <Icon type="clock"></Icon>
                            <span>短期投資</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="Ipage">
                        <MenuItem name="1-3">
                          <Icon type="information-circled"></Icon>
                            <span>公司資訊</span>
                        </MenuItem>
                    </router-link>
                </Menu>
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
                            <h2>股票名稱:{{stacknumber}}</h2>
                            </Col>
                            <Col span="8">
                            <h2>截止日期:2017/11/28</h2>
                            </Col>
                        </Row>
                        <Row>   
                            <Col span="24">
                            <Table :columns="columns1" :data="data1"></Table>
                            </Col>
                        </Row>
                        <Row>
                             <Tabs>
                              
                                <TabPane label="趨勢圖">
                                        
                                </TabPane>
                                <TabPane label="基本資訊">标签二的内容</TabPane>
                                <TabPane label="歷年股利">标签二的内容</TabPane>
                                <TabPane label="除權息資訊">标签二的内容</TabPane>
                                 <TabPane label="K線圖">
                                    <img src="http://kmfile.funddj.com/WikiFiles/d4cc2cd9-6cec-43b1-ab0d-52d6a920bdf0/tech2-6.JPG"></img>                                  
                                </TabPane>
                            </Tabs>
                        </Row>
                       
                        </Card>
                    
                </Content>
            </Layout>
      
    </div>
</template>
<script>
    export default {
        methods(){
            
        },
        data () {
            return {
                isCollapsed: false,
                stacknumber: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
                 columns1: [
                    {
                        title: '成交量',
                        key: 'date',
                        // sortable: true
                    },
                    {
                        title: '漲跌',
                        key: 'name'
                    },
                    {
                        title: '幅度',
                        key: 'age',
                       
                    },
                    {
                        title: '最高',
                        key: 'address'
                    },
                    {
                        title: '最低',
                        key: 'age',
                       
                    },
                    {
                        title: '開盤',
                        key: 'age',
                       
                    },
                    {
                        title: '總量',
                        key: 'age',
                       
                    },
                    {
                        title: '振幅',
                        key: 'age',
                       
                    },
                    
                ],
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
