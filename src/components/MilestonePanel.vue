<template>
  <div>
    <h1>
      <span class="fas fa-flag-checkered mr-2"></span>Milestones
    </h1>
    <loader endpoint="/api/milestones">
      <template v-slot:content="slotProps">
        <div class="list-group mb-4">
          <list-group
            :dataset="mileStonesToGroupItems(slotProps.responseData)"
          ></list-group>
        </div>
      </template>
    </loader>
  </div>
</template>


<script>
import loader from "@/components/Loader";
import listGroup from "@/components/ListGroup";

//make an empty dummy item to force listGroupItem to render as a skeleton

export default {
  components: { listGroup, loader },
  methods: {
    //map each mileStone to a groupItem
    //and return an array of group items made from the milestones
    mileStonesToGroupItems(milestones) {
      if (milestones){
      return milestones.map((milestone) => {
        return {
          key: milestone._id,
          upperNote: 'Written: ' + new Date(milestone.createdAt).toLocaleString('en-GB'),
          lowerNote: 'Updated: '+ new Date(milestone.updatedAt).toLocaleString('en-GB'),
          url: `/milestones/${milestone._id}`,
          description: milestone.description.substring(0,50) + '...',
          heading: milestone.name  
        };
      });
    }}
  }
};
</script>

