<template>
  <div class="home">
    <Trending/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Trending from "@/components/Trending.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Trending
  }
};
</script>
