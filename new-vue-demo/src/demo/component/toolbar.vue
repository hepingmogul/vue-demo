<template>

  <footer class="footers">
    <div class="foot-link" v-for="list in lists" :key="list.id" :class="[active == list.id?'active':'']">

      <template v-if="list.id == active">
        <div class="foot-icon">
          <span :class="[list.icon]"></span>
        </div>
        <div class="foot-text">{{list.text}}</div>
      </template>

      <router-link v-else :to="{path:list.route,query:{id:list.id}}">
        <div class="foot-icon">
          <span :class="[list.icon]"></span>
        </div>
        <div class="foot-text">{{list.text}}</div>
      </router-link>

    </div>
  </footer>

</template>
<script>
import lists from "../data/toolbar";
export default {
  data() {
    return {
      lists
    };
  },
  props: ["active"]
};
</script>
