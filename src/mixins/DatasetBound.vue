<script>

//This will serve as a util as it's used a lot...
// its the options object for the dataset props, by default it should be an array
//of length 1
//don't change the factory function below that returns the array, it's required.
export const defaultDataset = {
  type: Array,
  default: function() {
    return [""];
  }
};

export default {
  data: function() {
    return {
      //This is a new dataset which contains items which have been added by the client.
      newDataset: []
    };
  },
  props: {
    //This is the dataset that's already been supplied it should not be confused with
    // newDataset 
    initialDataset: defaultDataset,
    //This is to trigger rendering of a button which will enable to add new items
    //to newDataset
    addToDatasetButton: { type: Boolean, default: false }
  },
  computed: {
    //the totalDataset contains the items from the initial dataset and newDataset
    totalDataset: function() {
      this.initialDataset.concat(this.newDataset)
  }
  },
  methods: {
    addNewItem: function() {
      //real data doesn't have to be added, 
      //it's only the length of the array that needs to be increased
      this.newItems.push("");
    }
  }
};

</script>