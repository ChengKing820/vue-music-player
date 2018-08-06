<template>
  <div class="index-page">
    <Layout>
      <Header :style='header_style'>
        <IndexHeader></IndexHeader>
      </Header>
      <Content :style="content_style">
        <DisCovery></DisCovery>
      </Content>
      <Footer :style='footer_style'>
        <IndexFooter></IndexFooter>
      </Footer>
    </Layout>

  </div>
</template>

<script>
import IndexHeader from './public/IndexHeader'
import IndexFooter from './public/IndexFooter'
import DisCovery from './public/DisCovery'
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexFooter: IndexFooter,
    DisCovery: DisCovery
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
      },
      footer_style: {
        'position': 'fixed',
        'bottom': '0',
        'width': '100%',
        'height': '50px',
        'max-width': '768px',
        'padding': '0',
        'line-height': '50px'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
