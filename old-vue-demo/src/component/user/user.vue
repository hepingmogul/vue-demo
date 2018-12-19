<template>
  <div>
    我是标题栏页面哦！等于等到你了！
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello world!"
    };
  },
  methods: {
    jump() {
      // this.$dialog("请阅读并同意协议");
      this.$router.push("/foo");
    }
  }
};
</script>
