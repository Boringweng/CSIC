<template>
    <div id="slider">
         <Menu  theme="dark" width="auto" :class="menuitemClasses">
                         
                   <router-link to="/">      
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
    </div>
</template>
<style scoped>

</style>
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
            }
        },
    computed:{
          menuitemClasses: function () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            },
    }
}
</script>

