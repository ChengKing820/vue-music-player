<template>
  <div class="index-discovery">
    <Slider></Slider>
    <QuickEnter></QuickEnter>
    <SongSheet></SongSheet>
  </div>
</template>

<script>
import Slider from './Slider'
import QuickEnter from './QuiceEnter'
import SongSheet from './SongSheet'
export default {
  components: {
    Slider: Slider,
    QuickEnter: QuickEnter,
    SongSheet: SongSheet
  },
  data () {
    return {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
