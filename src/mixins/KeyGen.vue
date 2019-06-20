<script>
export default {
  data: function() {
      return {
    curNum: 0
      }
  },
  methods: {
      genKey: function(prefix){
          return prefix + this.curNum++;
      }
  }
};
</script>