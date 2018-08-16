<template>
  <div class="song-sheet">
    <div class="song-sheet-content">
      <div class="title-bread">
        <p>推荐歌单
          <Icon type="md-arrow-dropright" />
        </p>
      </div>

      <div class="song-sheet-list">
        <div class="song-sheet-block" :style="blockStyle" v-for="(item,index,key) in dataList" :key='key'>
          <div class="song-sheet-img" :style="imgStyle">
            <img :src="item.img" :alt="index">
          </div>
          <div class="song-sheet-title">
            <p>{{item.title}}</p>
          </div>
        </div>

      </div>
    </div>

    <div class="song-sheet-content">
      <div class="title-bread">
        <p>热门歌曲
          <Icon type="md-arrow-dropright" />
        </p>
      </div>

      <div class="song-sheet-list">
        <div class="song-sheet-block" :style="blockStyle" v-for="(item,index,key) in dataList" :key='key'>
          <div class="song-sheet-img" :style="imgStyle">
            <img :src="item.img" :alt="index">
          </div>
          <div class="song-sheet-title">
            <p>{{item.title}}</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      dataList: [{
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候听民谣'
      }, {
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候听民谣'
      }, {
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候bie听民谣'
      }, {
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候听民谣'
      }, {
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候听民谣'
      }, {
        'img': '/static/image/music-img.jpeg',
        'title': '孤独的时候听民谣'
      }]
    }
  },
  computed: {
    blockStyle: function () {
      let style = {
        'width': document.body.clientWidth / 3 + 'px',
        'height': document.body.clientWidth / 3 + 'px'
      }
      return style
    },
    imgStyle: function () {
      let style = {
        'width': (document.body.clientWidth / 3) * 0.8 + 'px',
        'height': (document.body.clientWidth / 3) * 0.8 + 'px'
      }
      return style
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .song-sheet-content{
    border-bottom: 1px solid #f5f2f2;
    padding-bottom: 30px;
  }

  .title-bread {
    margin: 15px 0 0 15px;
    font-size: 14px;
    font-weight: 600;
  }

  .title-bread p {
    height: 21px;
  }

  .title-bread i {
    height: 21px;
    line-height: 21px;
  }

  .song-sheet-list {
    line-height: 0;
    font-size: 0;
  }

  .song-sheet-list .song-sheet-block {
    display: inline-block;
    width: 33.3333333%;
    height: 125px;
    padding: 10px;
  }

  .song-sheet-list .song-sheet-block .song-sheet-img {
    margin: 0 auto;
  }

  .song-sheet-list .song-sheet-block img {
    width: 100%;
    height: 100%;
  }

  .song-sheet-list .song-sheet-block .song-sheet-title p {
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }

</style>
