<template>
  <div class="page">
    <header class="headers">
      <span class="icon-left">
        <span class="iconfont icon-fangxiangzuo"></span>
      </span>
      <span class="title">E报销</span>
    </header>

    <Toolbar v-bind:active="toolbarActive"></Toolbar>

    <section class="content">

      <!-- <Swiper></Swiper> -->

      <div>
        <img src="http://pic3.16pic.com/00/07/65/16pic_765494_b.jpg" style="width:100%;height:160px;display:block;">
      </div>

      <div v-for="menu in menus" :key="menu.id">

        <div class="weui-cells__title">{{menu.title}}</div>
        <div class="weui-grids">

          <div class="weui-grid" v-for="list in menu.list" :key="list.id">

            <div class="weui-grid__icon" :style="{backgroundColor:list.color}">
              <span class="weui-grid__icon_font" :class="[list.icon]"></span>
            </div>
            <p class="weui-grid__label">{{list.text}}</p>
          </div>

        </div>

      </div>

    </section>

  </div>
</template>

<script>
import menus from "../data/menu";
export default {
  data() {
    return {
      toolbarActive: 1,
      menus
    };
  }
};
</script>
