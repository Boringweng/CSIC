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
                </Header>  -->
                <Content :style="{padding: '0 16px 16px'}">
                     <CheckboxGroup v-model="social">
                          <h1> 產業類別</h1>
                          <Checkbox label="twitter">
                             
                              <span>電子類股</span>
                          </Checkbox>
                          <Checkbox label="facebook">
                             
                              <span>水泥類股</span>
                          </Checkbox>
                          <Checkbox label="github">
                              
                              <span>食品類股</span>
                          </Checkbox>
                      </CheckboxGroup>
                      <CheckboxGroup v-model="fruit">
                          <h1> 搜尋條件</h1>
                          <Checkbox label="香蕉"></Checkbox>
                          <Checkbox label="苹果"></Checkbox>
                          <Checkbox label="西瓜"></Checkbox>
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
                isCollapsed: false
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
