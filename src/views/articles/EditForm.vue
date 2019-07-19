<template>
<loader class="container" :endpoint="'/api/articles/' + id">
<template v-slot:content="slotProps">
<h1 class="mb-4">Editing Member: {{slotProps.response.name}}</h1>
<article-form 
:action="'/api/articles/' + id"
method="put"
:name="slotProps.response.name"
:thumbnailUrl="slotProps.response.thumbnailUrl"
:description="slotProps.response.description"
></article-form>
</template>
</loader>
</template>

<script>
import loader from '@/components/Loader'
import articleForm from './Form'

export default {
  props: {id: String},
  components: {
      loader, articleForm
  }
}
</script>