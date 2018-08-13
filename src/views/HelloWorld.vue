<template>
    <div>
      <van-nav-bar
        ref="header"
        :title="$route.name"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />

      <div>
      </div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">首页</van-tabbar-item>
        <van-tabbar-item icon="chat" dot>药品申请</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">值班表</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  export default {
    name: 'HellWord',
    data() {
      return {
        active: 1
      };
    },
    created() {
    },
    methods: {
      onClickLeft() {
      },
      onClickRight() {
      }
    },
    mounted() {
    }
  };
</script>

<style scoped>
  div {
    text-align: center;
  }
</style>
