<script>
import loadingScreen from '@/components/LoadingScreen'
import memberForm from './EmptyMemberForm'

export default {
  props: ["endpoint","memberId"],
  components: {
      loadingScreen, memberForm,formGroup
  }
}
</script>

<template>
<loading-screen class="container" :endpoint="endpoint">

<template v-slot:default="slotProps">
<member-form 
method="post"
:action="'/api/members/' + memberId + '?_method=PUT' "
:path-dataset="slotProps.response._id"
:name-dataset="slotProps.response.name"
:thumbnail-url-dataset="slotProps.response.thumbnailUrl"
:short-description-dataset="slotProps.response.shortDescription"
:description-dataset="slotProps.response.description"
:links-dataset="slotProps.response.links"></member-form>
</template>

</loading-screen>
</template>