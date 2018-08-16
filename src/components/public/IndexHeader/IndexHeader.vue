<template>
  <div class="index-header">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="3">
      <div class="header-icon-block">
        <Icon v-if="r==='/'" type="ios-musical-notes-outline" />
      </div>
      </Col>
      <Col span="18">
      <Search v-if="r==='/'"></Search>
      <div class="header-title">
        <p v-if="r==='/account'">账号</p>
      </div>
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
  watch: {
    $route: function () {
      this.r = this.$route.path
    }
  },
  data () {
    return {
      r: this.$route.path
    }
  },
  mounted: function () {
    // console.log(this.r)
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

  .header-title{
    font-size: 15px;
    color: #FFF;
    text-align: center;
  }

</style>
