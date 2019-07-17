<template>
  <loader endpoint="/api/projects">
    <template v-slot:content="slotProps">
      <!--
      <div v-if="isLoggedIn" class="mb-2 d-flex flex-row-reverse">
        <router-link :to="{name: 'newProject'}" class="btn btn-primary mr-4">New Project</router-link>
      </div>
      -->
      <div class="index">
        <jumbotron
          v-for="item in slotProps.response"
          :key="item._id"
          :header="item.name"
          :lead="item.description.substring(0,100)+'...'"
          content="lorem ipsum dolar amet blah blah and extra blah how are you doing this fine day"
          :url="'/projects/' + item._id"
          :backgroundUrl="item.thumbnailUrl"
        ></jumbotron>
      </div>
    </template>

    <template v-slot:loading="slotProps">
      <div class="index">
        <!--the style is inline because these are just blocks with grey background...-->
        <div
          style="width:800px;background-color:rgba(0,0,0,0.1);min-height:300px;margin-bottom:20px"
          v-for="(one,index) in 4"
          :key="one + index"
        ></div>
      </div>
    </template>
  </loader>
</template>

<script>
import card from "@/components/Card";
import loader from "@/components/Loader";
import jumbotron from "@/components/Jumbotron";

export default {
  name: "index-screen",
  components: {
    jumbotron,
    card,
    loader
  }
};
</script>
