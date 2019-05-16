<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-7">
        <h3 class="mt-2">Latest News:</h3>
        <news-screen></news-screen>
      </div>
      <div class="col-md">
        <h3 class="mt-2">Latest Projects:</h3>
        <index-screen endpoint="/api/projects" route-for-single="projectDetails"></index-screen>
      </div>
    </div>
  </div>
</template>


<script>
import newsScreen from '@/components/NewsScreen';
import indexScreen from '@/components/IndexScreen';

// @ is an alias to /src
export default {
  name: "home",
  components: {newsScreen,indexScreen}
};
</script>


