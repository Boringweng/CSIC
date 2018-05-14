<template>
  <div v-for="item in list" :key="item">
  <h2>{{ item.title }}</h2>
  <p>{{ item.info }}</p>
  <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
  </div>
</template>

<script>
export default {
  // vue option 當中有 props 開發區域
  props: {
    // attribute name: Type
    list: [
      {
        title: 'Heading',
        info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
        btntext: 'View details »'
      }
    ]
  },
  //data () {
  //  return {
  //    list: [ 資料"不"需要存在這邊了 ],
  //  }
  //},
}
</script>