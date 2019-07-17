<template>
  <div class="container-fluid row">
    <!--about section-->
    <about class="col-md-7"></about>
    <!--end of about section-->

    <!--milestones section-->
        <milestone-panel class="col-md-5"
        ></milestone-panel>
    <!-- end of milestones section-->

  </div>
</template>


<script>
import loader from "@/components/Loader";
import milestonePanel from "@/components/MilestonePanel";
import about from "@/components/About.vue"

// @ is an alias to /src
export default {
  name: "home",
  components: { loader, milestonePanel,about },
};
</script>


