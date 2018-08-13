<template>
  <div class="info">
    <div class="info-header">
      <van-nav-bar
        ref="header"
        :title="$route.name"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="info-container">
      <new-info-item/>
      <new-info-item/>
      <new-info-item/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'infoList',

    mixins: [],

    components: {},

    props: {},

    data() {
      return {};
    },

    computed: {},

    watch: {},

    created() {
    },

    mounted() {
    },

    destroyed() {
    },

    methods: {
      onClickLeft() {
        this.$router.go(-1);
      }
    }
  };
</script>

<style scoped>
  .info-container {
    background-color: rgba(241, 239, 240, 1);
    height: 100vh;
  }
</style>
