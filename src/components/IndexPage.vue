<template>
  <div class="index-page">
    <Layout>
      <Header :style='header_style'>
        <IndexHeader></IndexHeader>
      </Header>
      <Content>Content</Content>
      <Footer :style='footer_style'>Footer</Footer>
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
        'line-height': '50px'
      },
      footer_style: {
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'height': '50px',
        'max-width': '768px'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
