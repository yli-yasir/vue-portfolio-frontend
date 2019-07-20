<template>
<loader class="container" :endpoint="'/api/articles/' + id">
<template v-slot:content="{responseData}">
<h1 class="mb-4">Editing Article: {{responseData.name}}</h1>
<article-form 
:action="'/api/articles/' + id"
method="put"
:name="responseData.name"
:thumbnailUrl="responseData.thumbnailUrl"
:description="responseData.description"
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