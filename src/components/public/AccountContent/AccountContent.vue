<template>
  <div class="account-content">
    <AccountBase></AccountBase>
    <AccountList></AccountList>
  </div>
</template>

<script>
import AccountBase from './AccountBase'
import AccountList from './AccountList'
export default {
  components: {
    AccountBase: AccountBase,
    AccountList: AccountList
  },
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

</style>
