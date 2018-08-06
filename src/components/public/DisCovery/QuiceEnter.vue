<template>
  <div class="quick-enter clearfloat">
    <ul>
      <li class="enter-item">
        <div class="enter-item-block">
          <Icon type="ios-radio-outline" />
        </div>
        <div class="enter-item-title">
          <p>私人FM</p>
        </div>
      </li>
      <li class="enter-item">
        <div class="enter-item-block">
          <Icon type="ios-alarm-outline" />
        </div>
        <div class="enter-item-title">
          <p>每日推荐</p>
        </div>
      </li>
      <li class="enter-item">
        <div class="enter-item-block">
         <Icon type="ios-folder-open-outline" />
        </div>
        <div class="enter-item-title">
          <p>歌单</p>
        </div>
      </li>
      <li class="enter-item">
        <div class="enter-item-block">
          <Icon type="ios-stats-outline" />
        </div>
        <div class="enter-item-title">
          <p>排行榜</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  mounted: function () {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .quick-enter {
    padding: 20px 0;
    border-bottom: 1px solid #eeeeee;
  }

  ul li {
    list-style: none
  }

  .enter-item {
    float: left;
    width: 25%;
    text-align: center;

  }

  .enter-item-block {
    background: #ef4747;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 0 auto;
    color: #FFF;
    font-size: 21px;
  }

  .enter-item-block i {
    line-height: 40px;
  }

  .enter-item-title {
    font-size: 12px;
    margin-top: 5px;
  }

  .clearfloat:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0
  }

  .clearfloat {
    zoom: 1
  }

</style>
