<template>
  <div class="item">
    <div class="item-title">
      <span class="item-title-dot"></span>
      <span class="item-title-text">您有{{number}}条待审核消息</span>
    </div>
    <div class="item-time">
      <span class="item-time-text">07月06号 11：02</span>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'InfoItem',
  props: {
	    number: {
	      type: Number,
      default: 1
    }
  }
	};
</script>

<style scoped lang="less" type="text/less">
  .item {
    width:720px;
    height:100px;
    background:rgba(255,255,255,1);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .item-title {
      position: relative;
      align-self: center;
      .item-title-dot {
        display:block;
        background:#f00;
        border-radius:50%;
        width:13px;
        height:13px;
        top: 10px;
        left: 19px;
        position:absolute;
      }
      .item-title-text {
        font-size:24px;
        font-family:HiraginoSansGB-W3;
        color:rgba(51,51,51,1);
        margin-left: 60px;
      }
    }
    .item-time {
      align-self: center;
      .item-time-text {
        font-size:25px;
        font-family:HiraginoSansGB-W3;
        color:rgba(102,102,102,1);
      }
      margin-right: 25px;
    }
  }
</style>
