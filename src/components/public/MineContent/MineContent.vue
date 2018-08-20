<template>
  <div class="mine-content">
    <MineLink></MineLink>
    <MineCreate :list='creatList'></MineCreate>
    <MineCreate :list='favList'></MineCreate>
  </div>
</template>

<script>
import MineLink from './MineLink'
import MineCreate from './MineCreate'
export default {
  components: {
    MineLink: MineLink,
    MineCreate: MineCreate
  },
  data () {
    return {
      creatList: {
        header: '我创建的歌单',
        list: [{
          title: '我喜欢的音乐',
          img: '/static/image/music-img.jpeg'
        }, {
          title: '伴奏大全',
          img: '/static/image/music-img.jpeg'
        }, {
          title: '古风音乐欣赏',
          img: '/static/image/music-img.jpeg'
        }]
      },
      favList: {
        header: '我收藏的歌单',
        list: [{
          title: '中国风电音|牛的一逼',
          img: '/static/image/music-img.jpeg'
        }, {
          title: '电吉他里悠长的灵魂',
          img: '/static/image/music-img.jpeg'
        }, {
          title: '古风向：惊艳戏腔合集',
          img: '/static/image/music-img.jpeg'
        }, {
          title: '古意民谣|浮生有梦三千场',
          img: '/static/image/music-img.jpeg'
        }]
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
