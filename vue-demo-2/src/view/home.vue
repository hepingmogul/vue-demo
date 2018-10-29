<template>
 <div>
     <h3>我是首页</h3>
     <div><button @click="jump">跳转user页面</button></div>
 </div>
</template>
<style>
</style>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    jump() {
      this.$router.push("/user");
    }
  }
};
</script>
