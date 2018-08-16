<template>
  <div id="app">
    <Layout>
      <Header :style='header_style'>
        <IndexHeader></IndexHeader>
      </Header>
      <router-view/>
      <Footer :style='footer_style'>
        <IndexFooter></IndexFooter>
      </Footer>
    </Layout>

  </div>
</template>

<script>
import IndexHeader from './components/public/IndexHeader'
import IndexFooter from './components/public/IndexFooter'
export default {
  components: {
    IndexHeader: IndexHeader,
    IndexFooter: IndexFooter
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    overflow: hidden;
  }

</style>
