<!-- a list group which takes a dataset as a prop and and renders list items for
each element in the dataset

items in the dataset must define the following fields:

item.key
item.heading
item.description
item.upperNote
item.lowerNote
item.url

if all these fields are empty/falsy (except item._id) then each listGroupItem will render a skeleton of itself.

-->
<template>
  <div class="list-group">
    <list-group-item
      v-for="item in mDataset"
      :key="item.key"
      :heading="item.heading"
      :description="item.description"
      :url="item.url"
      :upperNote="item.upperNote"
      :lowerNote="item.lowerNote"
    ></list-group-item>
  </div>
</template>

<script>
import listGroupItem from "@/components/ListGroupItem";

let dummyItem = {
  heading: "",
  description: "",
  lowerNote: "",
  uppperNote: "",
  url: ""
};

export default {
  data: () => {
    return {
      //provide a dummy dataset with items that have empty values to render a skeleton
      //when if the real dataset is not available yet
      dummyDataset: [
        { ...dummyItem, key: "firstDummy" },
        { ...dummyItem, key: "secondDummy" },
        { ...dummyItem, key: "thirdDummy" }
      ]
    };
  },
  props: {
    //this should be an array of the listGroupItems, see at the top of the file
    //for which fields they should define

    dataset: Array
  },
  computed: {
    mDataset() {
      //if the real dataset that's been provided is not available then
      //use a dummy dataset to render a skeleton
      return !this.dataset ? this.dummyDataset : this.dataset;
    }
  },
  components: { listGroupItem }
};
</script>