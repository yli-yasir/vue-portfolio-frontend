<script>

export const defaultDataset = {
  type: [Array,String],
  default: function() {
    return [""];
  }
};

export default {
  data: function() {
    return {
      newItems: []
    };
  },
  props: {
    dataset: defaultDataset,
    addToDatasetButton: { type: Boolean, default: false }
  },
  computed: {
    ownDataset: function() {
      if (Array.isArray(this.dataset)) {
        return this.dataset === [] ? [""] : this.dataset.concat(this.newItems);
      } else {
        return Array(this.dataset);
      }
    }
  },
  methods: {
    addNewItem: function() {
      this.newItems.push("");
    }
  }
};

</script>