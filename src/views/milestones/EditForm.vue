<template>
<loader class="container" :endpoint="'/api/milestones/' + id">
<template v-slot:content="{responseData}">
<news-form 
:action="'/api/milestones/' + id  "
method="put"
:name="responseData.name"
:description="responseData.description"
:originDate="responseDate.originDate"
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