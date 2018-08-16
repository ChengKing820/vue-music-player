<template>
  <div class="slider">
    <div class="slider-block">
      <div class="slider-list" :style="{width:sliderWidth}">
        <div class="slider-item" :style="{width:width+'px'}" v-for="(item,index,key) in imgList" :key='key'>
          <img :src="item.image" :alt="index">
        </div>
      </div>
      <div class="slider-tools">
        <ul>
          <li class="active"></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [{
        image: '/static/image/test1.jpg'
      }, {
        image: '/static/image/test1.jpg'
      }, {
        image: '/static/image/test1.jpg'
      }, {
        image: '/static/image/test1.jpg'
      }],
      width: document.body.clientWidth
    }
  },
  computed: {
    sliderWidth: function () {
      return (this.imgList.length * 100) + '%'
    }
  },
  mounted: function () {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slider .slider-block {
    width: 100%;
    position: relative;
    line-height: 0;
  }

  .slider .slider-block .slider-list {
    line-height: 0;
    transition: transform 380ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    transform: translate3d(-375px, 0px, 0px);
  }

  .slider .slider-block .slider-item {
    line-height: 0;
    height: 160px;
    overflow: hidden;
    display: inline-block;
  }

  .slider .slider-block .slider-item img {
    width: 100%;
    height: 100%;
  }

  .slider-tools {
    position: relative;
    bottom: 10px;
    height: 0px;
    display: block;
    width: 100%;
    text-align: center;
  }

  .slider-tools ul {
    margin: 0;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding: 0;
    list-style: none;
  }

  .slider-tools ul li {
    display: inline-block;
    margin: 1px;
    width: 5px;
    height: 5px;
    line-height: 9999px;
    background-color: #ccc;
    border-radius: 100%;
  }

  .slider-tools ul .active {
    background-color: #8eccff;
  }

</style>
