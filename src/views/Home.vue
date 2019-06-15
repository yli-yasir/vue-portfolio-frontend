<template>
  <div class="container-fluid">

    <loader endpoint="api/news">

      <template v-slot:content="slotProps">
          <div class="list-group">
            <list-group-item 
            v-for="item in slotProps.response"
            :key="item._id"
            :heading="item.name"
            :description="item.description"
            ></list-group-item>
          </div>
      </template>


    </loader>

  </div>
</template>


<script>
import loader from "@/components/Loader";
import listGroupItem from "@/components/ListGroupItem"

// @ is an alias to /src
export default {
  name: "home",
  components: { loader, listGroupItem}
};
</script>


