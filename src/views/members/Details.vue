<template>
  <loader class="container-fluid" :endpoint=" '/api/members/' + id " >
    <template v-slot:content="slotProps">
          <div class="detailsContainer mx-auto">
          <h1 class="text-center">{{slotProps.response.name}}</h1>
          <p class="mt-4">{{slotProps.response.description}}</p>
          </div>
    </template>
  </loader>
</template>

 <script>
import loader from '@/components/Loader'
export default {
  props: {endpoint: String},
  components: {Loader}
 }
 </script>