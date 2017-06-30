

export default {
  name: 'SearchComponent',
  data() {
    return {
      sharedData: this.$root.$data,
      keySearch: ''
    };
  },
  methods: {
    getQuote() {
      this.$http.post(
        'http://localhost:3001/api/product-search',
        {'keySearch':this.keySearch})
        .then(function(data){
          this.sharedData.productData = data.body;
        },
        function(err){
          this.sharedData.productData = null;
          console.error(err);
        });
    }
  }
}