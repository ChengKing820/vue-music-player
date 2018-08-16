<template>
  <div class="index-page">
    <Layout>
      <Header :style='header_style'>
        <IndexHeader></IndexHeader>
      </Header>
      <Content :style="content_style">
        <!-- <DisCovery></DisCovery> -->
      </Content>
    </Layout>

  </div>
</template>

<script>
import IndexHeader from './public/IndexHeader'
export default {
  components: {
    IndexHeader: IndexHeader
  },
  data () {
    return {
      header_style: {
        'position': 'fixed',
        'width': '100%',
        'background': '#C20C0C',
        'height': '50px',
        'max-width': '768px',
        'padding': '0',
        'line-height': '50px',
        'z-index': '999'
      },
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
