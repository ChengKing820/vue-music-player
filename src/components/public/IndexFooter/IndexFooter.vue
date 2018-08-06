<template>
  <div class="index-footer">
    <Row type="flex" justify="center" class="code-row-bg">
      <Col span="8">
      <div class="footer-icon-block focus-item">
        <Icon type="ios-disc" />
        <p>发现</p>
      </div>
      </Col>
      <Col span="8">
      <div class="footer-icon-block">
        <Icon type="ios-musical-notes" />
        <p>我的</p>
      </div>
      </Col>
      <Col span="8">
      <div class="footer-icon-block">
        <Icon type="ios-person" />
        <p>账号</p>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {

  data () {
    return {

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-footer {
    height: 100%
  }

  .focus-item{
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
