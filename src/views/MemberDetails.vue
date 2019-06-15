<script>
import loader from '@/mixins/Loader'
export default {
  props: ["endpoint"],
  components: {loadingScreen}
 }</script>


 <template>
   <loading-screen class="container-fluid" :endpoint="endpoint">
      <template v-slot:default="slotProps">
      <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md">
      <div>
      <h4>{{slotProps.response.title}}</h4>
      <p>{{slotProps.response.description}}</p>
      </div>
      <div class="col-md-2"></div>
      </div>
      </div>
      </template>
      </loading-screen>
 </template>