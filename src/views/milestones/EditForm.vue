<template>
<loader class="container" :endpoint="'/api/milestones/' + id">
<template v-slot:content="slotProps">
<news-form 
:action="'/api/milestones/' + id  "
method="put"
:name="slotProps.response.name"
:description="slotProps.response.description"
></news-form>
</template>
</loader>
</template>

<script>
import loader from '@/components/Loader'
import newsForm from './Form'

export default {
  props: {id: String},
  components: {
      loader, newsForm
  }
}
</script>