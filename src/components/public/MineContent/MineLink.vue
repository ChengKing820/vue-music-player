<template>
  <div class="mine-link">
    <ul>
      <li>
        <p>
          <Icon type="ios-musical-notes-outline" />本地音乐<span>2</span></p>
      </li>
      <li>
        <p><Icon type="ios-timer-outline" />最近播放<span>99</span></p>
      </li>
      <li>
        <p><Icon type="md-heart-outline" />我的收藏<span>10</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
// import DisCovery from './public/DisCovery'
export default {
  components: {
    // DisCovery: DisCovery
  },
  data () {
    return {}
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine-link li {
    padding: 10px 10px;
    background: #FFF;
    border-bottom: 1px solid #ddd;
  }

  .mine-link li p {
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-size: 13px;
  }

  .mine-link li p i {
    font-size: 24px;
    padding-right: 10px;
  }

  .mine-link li p span {
    float:right;
    color: #bbb;
  }

</style>
