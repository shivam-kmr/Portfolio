<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Full Stack Developer
    </p>
    <Jobs />
  </div>
</template>
<script>
// import { Row, Col, Card } from "view-design";
import Jobs from "./Jobs.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: {
    Jobs
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.companyLogo {
  width: 250px;
}
.ivu-card-body {
  height: 150px;
}
.time {
  font-size: 14px;
  font-weight: bold;
}
.content {
  padding-left: 5px;
}
</style>
