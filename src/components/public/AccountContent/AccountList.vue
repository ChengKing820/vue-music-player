<template>
  <div class="account-list">
    <ul>
      <li>
        <p><Icon type="ios-mail-outline" />我的消息</p>
      </li>
      <li>
        <p><Icon type="ios-cart-outline" />商城</p>
        <p><Icon type="ios-game-controller-b-outline" />游戏推荐Beta</p>
        <p><Icon type="ios-easel-outline" />在线听歌免流量</p>
      </li>
      <li>
        <p><Icon type="ios-cog-outline" />设置</p>
        <p><Icon type="ios-qr-scanner" />扫一扫</p>
        <p><Icon type="ios-shirt-outline" />个性换肤</p>
        <p><Icon type="ios-timer-outline" />定时关闭</p>
        <p><Icon type="ios-clock-outline" />音乐闹钟</p>
        <p><Icon type="ios-car-outline" />驾驶模式</p>
        <p><Icon type="ios-pricetag-outline" />优惠券</p>

      </li>
      <li>
        <p><Icon type="ios-share-outline" />分享网易云音乐</p>
        <p><Icon type="ios-information-circle-outline" />关于</p>
      </li>
      <li>
        <p><Icon type="ios-log-out" />退出登陆</p>
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
  methods: {

  },
  mounted: function () {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.account-list {
  background: #f5f7f9;
}

.account-list ul{
  padding-top: 10px;
}
.account-list li {
  margin: 10px 0;
  padding: 0 10px;
  background: #FFF;
}

.account-list li p {
  height: 40px;
  width: 100%;
  line-height: 40px;
  font-size: 13px;
}
.account-list li p i {
  font-size: 24px;
  padding-right: 10px;
}
</style>
