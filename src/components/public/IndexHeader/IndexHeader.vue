<template>
  <div class="index-header">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="4">
      <div class="header-icon-block">
        <Icon type="ios-musical-notes-outline" />
      </div>
      </Col>
      <Col span="16">
      <search></search>
      </Col>
      <Col span="4">
      <div class="header-icon-block">
        <Icon type="ios-headset-outline" />
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import search from './search'
export default {
  components: {
    search: search
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
    font-size: 30px;
    color: #FFF;
  }

</style>
