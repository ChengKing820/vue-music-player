<template>
  <div class="account-page">
    <Content :style="content_style">
     <AccountContent></AccountContent>
    </Content>

  </div>
</template>

<script>
import AccountContent from './public/AccountContent'
export default {
  components: {
    AccountContent: AccountContent
  },
  data () {
    return {
      content_style: {
        'margin': '50px 0',
        'background': '#FFF'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
