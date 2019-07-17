<!-- if all props of this element are empty, then it's returned as a skeleton
-->
<template>
  <router-link
    :to=" !url ? '#' : url"
    :class="{skeleton: isSkeleton}"
    class="list-group-item list-group-item-action flex-column align-items-start"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{heading}}</h5>
      <small v-if="!isSkeleton">{{upperNote}}</small>
    </div>
    <p class="mb-1">{{description}}</p>
    <small v-if="!isSkeleton">{{lowerNote}}</small>
  </router-link>
</template>

<script>
import skeleton from "@/mixins/Skeleton";

export default {
  props: {
    url:  String,
    heading: String,
    upperNote:  String,
    description:  String,
    lowerNote:  String
  },
  computed: {
    isSkeleton() {

      //it's a skeleton if all it's props are falsy i.e empty strings
      return !this.url && !this.heading && !this.upperNote && !this.description && !this.lowerNote;
    }
  }
};

</script>

<style lang="scss" scoped>
$skeleton-bg: rgba(black, 0.1);

.list-group-item {
  &:nth-child(even) {
    background-color: var(--primary);
    color: white;
  }
}
.skeleton {
  * {
    border-radius: 10px;
  }
  h5 {
    width: 30px;
    height: 10px;
    background-color: $skeleton-bg;
  }
  p {
    width: 100%;
    height: 20px;
    background-color: $skeleton-bg;
  }
}
</style>
