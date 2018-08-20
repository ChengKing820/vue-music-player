<template>
  <div class="mine-create">
    <p class='create-title'>{{list.header}}</p>
    <ul>
      <li v-for="(item,index,key) in list.list" :key='key'>
        <p>
          <span>{{item.title}}</span><img :src="item.img"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: Object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mine-create .create-title{
    height: 24px;
    line-height: 24px;
    background: #ddd;
    color: #333;
    font-weight: 500;
    padding-left: 15px;
  }
  .mine-create li {
    padding: 10px 10px;
    background: #FFF;
    border-bottom: 1px solid #ddd;
  }

  .mine-create li p {
    height: 40px;
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    font-weight: 500;
  }

  .mine-create li p img {
    height: 100%;
    width: 40px;
    float: right;
  }

</style>
