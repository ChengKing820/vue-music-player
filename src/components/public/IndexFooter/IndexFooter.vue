<template>
  <div class="index-footer">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="8" v-for="(item,index,key) in list" :key="key">
      <div class="footer-icon-block" :style="item.style" @click="toPage(item.url,index)">
        <Icon :type="item.icon" />
        <p>{{item.title}}</p>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        title: '发现',
        url: '/',
        icon: 'ios-disc',
        style: {
          color: '#515a6e'
        }
      },
      {
        title: '我的',
        url: '/mine',
        icon: 'ios-musical-notes',
        style: {
          color: '#515a6e'
        }
      },
      {
        title: '账号',
        url: '/account',
        icon: 'ios-person',
        style: {
          color: '#515a6e'
        }
      }
      ]
    }
  },
  methods: {
    toPage: function (url, index) {
      this.$router.push(url)
      for (let i in this.list) {
        if (parseInt(i) === index) {
          this.list[i].style.color = '#c20c0c'
        } else {
          this.list[i].style.color = '#515a6e'
        }
      }
    }
  },
  mounted: function () {
    const router = this.$route.path
    for (let i in this.list) {
      if (this.list[i].url === router) {
        this.list[i].style.color = '#c20c0c'
      } else {
        this.list[i].style.color = '#515a6e'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-footer {
    height: 100%
  }

  .focus-item {
    color: #c20c0c
  }

  .footer-icon-block {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 24px;
  }

  .footer-icon-block i {
    display: block;
    position: relative;
    top: 8px;
  }

  .footer-icon-block p {
    font-size: 12px;
    display: inline-block;
    position: relative;
    bottom: 12px;

  }

</style>
