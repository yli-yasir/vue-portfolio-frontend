<template>
<loader class="container" :endpoint="'/api/milestones/' + id">
<template v-slot:content="{responseData}">
<milestone-form 
:action="'/api/milestones/' + id  "
method="put"
:name="responseData.name"
:description="responseData.description"
:originDate="formatDateString(responseData.originDate)"
></milestone-form>
</template>
</loader>
</template>

<script>
import loader from '@/components/Loader'
import milestoneForm from './Form'

export default {
  props: {id: String},
  components: {
      loader, milestoneForm
  },
  methods: {
    formatDateString(dateString){
      if (dateString){
        
        let formatted =  dateString.substring(0,dateString.length-1)
        console.log(formatted)
        return formatted;
      }
    }
  }
}
</script>