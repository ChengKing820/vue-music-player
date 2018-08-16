<template>
  <div class="index-page">
    <Content :style="content_style">
      <DisCovery></DisCovery>
    </Content>
  </div>
</template>

<script>

import DisCovery from './public/DisCovery'
export default {
  components: {
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
