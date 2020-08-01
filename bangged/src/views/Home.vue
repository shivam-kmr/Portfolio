<template>
  <div class="home">
    <a href="mailto:shivam.kumar@live.in?subject=Wanted to Say Hi. !&body=Let's Catch up somewhere around."><img alt="Vue logo" class="displayIcon" src="../assets/displayIcon.png" /></a>
    <HelloWorld msg="Shivam Kumar" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
.displayIcon {
  width: 250px;
}
</style>
