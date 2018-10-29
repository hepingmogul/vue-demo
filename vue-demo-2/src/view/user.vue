
<template>
    <div>
        <h3>我是我的页面</h3>
        <div><button @click="jump">跳转home页面</button></div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    jump() {
      this.$router.push("/home");
    }
  }
};
</script>