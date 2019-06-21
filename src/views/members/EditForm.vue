<template>
<loader class="container" :endpoint="'/api/members/' + id">
<template v-slot:content="slotProps">
<member-form 
method="post"
:action="'/api/members/' + id + '?_method=PUT' "
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