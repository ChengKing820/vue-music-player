<template>
  <div class="index-page">
    <Content :style="content_style">
      <DisCovery></DisCovery>
    </Content>
  </div>
</template>

<script>

import IndexFooter from './public/IndexFooter'
import DisCovery from './public/DisCovery'
export default {
  components: {
    IndexFooter: IndexFooter,
    DisCovery: DisCovery
  },
  data () {
    return {
      content_style: {
        'margin': '50px 0',
        'background': '#FFF'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
