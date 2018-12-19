<!-- 打卡、登记 -->

<template>
  <div class="page">
    <div class="content" @click="jump">
      你好，世界。我是foo哦！谢谢支持！爱你们！
      <div class="divs">
        askjdhkajsdhkajd {{ msg }}
      </div>

      <!-- <div v-for=""></div> -->

    </div>
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
      alert("点击foo");
      this.$router.push("/bar");
    }
  }
};
</script>
