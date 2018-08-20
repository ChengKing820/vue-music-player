<template>
  <div class="mine-page">
    <Content :style="content_style">
      <MineContent></MineContent>
    </Content>
  </div>
</template>

<script>

import MineContent from './public/MineContent'
export default {
  components: {
    MineContent: MineContent
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
