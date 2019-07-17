<template>
  <router-link
    :to="url"
    :class="{skeleton: isSkeleton}"
    class="list-group-item list-group-item-action flex-column align-items-start"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{heading}}</h5>
      <small>{{upperNote}}</small>
    </div>
    <p class="mb-1">{{description}}</p>
    <small>{{lowerNote}}</small>
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
      return !this.url && !this.heading && !this.upperNote && !this.desciption && !this.lowerNote;
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
