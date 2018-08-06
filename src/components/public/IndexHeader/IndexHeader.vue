<template>
  <div class="index-header">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="3">
      <div class="header-icon-block">
        <Icon type="ios-musical-notes-outline" />
      </div>
      </Col>
      <Col span="18">
      <Search></Search>
      </Col>
      <Col span="3">
      <div class="header-icon-block">
        <Icon type="ios-headset-outline" />
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Search from './Search'
export default {
  components: {
    Search: Search
  },
  data () {
    return {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-icon-block {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 24px;
    color: #FFF;
  }

</style>
