<template>
<div>
  <h1>
    <span class="fas fa-flag mr-2"></span>Milestones
  </h1>
  <loader endpoint="/api/milestones">
  <template v-slot:content="slotProps">
  <div class="list-group mb-4">
    <list-group-item
      v-for="item in slotProps.response"
      :key="item._id"
      :heading="item.name"
      :description="item.description"
      :url=" '/milestones/' + item._id"
      :upperNote="'Posted: ' + new Date(item.createdAt).toLocaleString('en-GB')"
      :lowerNote="'Last Edit: ' + new Date(item.updatedAt).toLocaleString('en-GB')"
    ></list-group-item>
  </div>
  </template>
  </loader>
  </div>
</template>


<script>
import listGroupItem from '@/components/ListGroupItem'
import loader from '@/components/Loader'

export default {
    props: {
      items: Array
    },
    components: {listGroupItem,loader}
}
</script>

