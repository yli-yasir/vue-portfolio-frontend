<template>
<loader class="container" :endpoint="'/api/members/' + id">
<template v-slot:content="slotProps">
<h1 class="mb-4">Editing Member: {{slotProps.response.name}}</h1>
<member-form 
:action="'/api/members/' + id"
method="put"
:name="slotProps.response.name"
:thumbnailUrl="slotProps.response.thumbnailUrl"
:description="slotProps.response.description"
></member-form>
</template>
</loader>
</template>

<script>
import loader from '@/components/Loader'
import memberForm from './Form'

export default {
  props: {id: String},
  components: {
      loader, memberForm
  }
}
</script>