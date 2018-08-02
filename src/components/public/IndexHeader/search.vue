<template>
  <div class="search-input">
    <div class="input-block">
      <input v-model="search_key" type="text">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search_key: ''
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input-block {
    height: 30px;
    line-height: 30px;
    width: 100%;
    padding: 0 8px;
    display: inline-block;
    border-radius: 15px;
    border: 1px solid #EEE;
    background: #FFF;
  }

  .input-block input {
    height: 20px;
    width: 100%;
    outline: none;
    border: 0px;
  }

</style>
