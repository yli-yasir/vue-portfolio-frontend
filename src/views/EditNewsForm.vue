<script>
import loadingScreen from "@/components/LoadingScreen";
import newsForm from "./EmptyMemberForm";

export default {
  props: ["endpoint", "newsId"],
  components: { loadingScreen, newsForm }
};
</script>

  <template>
  <loading-screen class="container" :endpoint="endpoint">
    <template v-slot:default="slotProps">
      <news-form
        method="post"
        :action="'/api/news/' + newsId + '?_method=PUT' "
        :path-dataset="slotProps.response._id"
        :name-dataset="slotProps.response.name"
        :thumbnail-url-dataset="slotProps.response.thumbnailUrl"
        :short-description-dataset="slotProps.response.shortDescription"
        :description-dataset="slotProps.response.description"
        :links-dataset="slotProps.response.links"
      ></news-form>
    </template>
  </loading-screen>
</template>

</loading-screen>
  </template>