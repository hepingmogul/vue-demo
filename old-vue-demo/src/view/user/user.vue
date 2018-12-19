<template>
  <div class="page">
    <header class="headers">
      <span class="icon-left">
        <span class="iconfont icon-fangxiangzuo"></span>
      </span>
      <span class="title">我的</span>
    </header>

    <Toolbar v-bind:active="toolbarActive"></Toolbar>

    <section class="content">
      <div class="users">
        <div class="users-head">
          <span class="iconfont-ebx icon-ebx-touxiang"></span>
        </div>
        <div class="users-info">
          <div class="users-info_title">{{userName}}</div>
          <div class="users-info_subtitle">{{unitName}}</div>
          <div class="users-info_roles">
            <span class="users-info_role" v-for="list in userRole" :key="list" :data-role="list">{{roles[list]}}</span>
          </div>
        </div>
      </div>

      <div class="weui-cells">

        <div class="weui-cell weui-cell_link" v-for="list in menus" :key="list.id">
          <div class="weui-cell__bd weui-cell__medias">
            <div class="weui-cell__media">
              <span class="iconfont-ebx" :class="[list.icon]"></span>
            </div>
            <p>{{list.text}}</p>
          </div>
          <div class="weui-cell__ft">
            <span class="iconfont icon-fangxiangyou"></span>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
import menus from "../../data/user";
export default {
  data() {
    return {
      toolbarActive: 4,
      menus,
      userName: "何平",
      unitName: "星合联盟（北京）技术有限公司",
      userRole: [60, 61],
      roles: {
        60: "管理员",
        61: "前端"
      }
    };
  },
  mounted() {
    console.log("111111111111");
    this.asdasd();
    this.asdasd2();
  },
  methods: {
    getUserInfo: function() {
      this.axios
        .get(`${this.cfg.api.host}${this.cfg.api.host}`)
        .then(rs => {
   console.log("22222222222");
        })
        .catch(rs => {});
   
    },
    asdasd2() {
      console.log("3333333333");
    }
  }
};
</script>
