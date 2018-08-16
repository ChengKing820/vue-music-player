<template>
  <div class="account-base">
    <div class="account-base-message">
      <div class="account-avatar">
        <div class="account-image">
          <img src="/static/image/avatar.jpeg">
        </div>
      </div>
      <div class="account-name">
        <p>金程</p>
      </div>
      <div class="account-checkin">
        <span @click="checkInTurn" v-if="!checkIn">签到</span>
        <span class="checkin-confirm" @click="checkInTurn" v-if="checkIn">已签到</span>
      </div>
    </div>

    <div class="account-friend">
      <div class="account-friend-item" style="border:0">
        <p>关注</p>
        <p class="account-friend-number">10</p>
      </div>
      <div class="account-friend-item">
        <p>粉丝</p>
        <p class="account-friend-number">9999</p>
      </div>
      <div class="account-friend-item">
        <p class="account-editor">编辑资料</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    checkIn: function () {
      return this.$store.state.checkIn
    }
  },
  methods: {
    checkInTurn: function () {
      this.$store.commit('turnCheckIn')
    }
  },
  mounted: function () {}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .account-base-message {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .account-friend {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .account-avatar {
    padding: 15px;
    display: inline-block;
  }

  .account-avatar .account-image {
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
  }

  .account-avatar .account-image img {
    width: 100%;
    height: auto;
  }

  .account-name {
    display: inline-block;
    height: 70px;
    line-height: 70px;
    font-size: 14px;
    font-weight: 600;
  }

  .account-friend-item {
    margin: 10px 0;
    flex-grow: 1;
    display: inline-block;
    text-align: center;
    border-left: 1px solid #eee;
  }

  .account-friend-item .account-friend-number{
    font-weight: 900
  }

  .account-checkin {
    flex-grow: 1;
    display: inline-block;
    height: 70px;
    line-height: 70px;
    text-align: right;
    padding-right: 30px;
  }

  .account-checkin span {
    border: 1px solid #333;
    border-radius: 10px;
    padding: 2px 3px;
  }

  .checkin-confirm {
    color: #ddd;
    border: 1px solid #ddd !important;
  }

  .account-editor{
    height: 36px;
    line-height: 36px;
  }

</style>
