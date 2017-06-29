

export default {
  name: 'SearchComponent',
  data() {
    return {
      quote: ''
    };
  },
  methods: {
    getQuote() {
      this.$http.get('http://localhost:3001/api/random-quote')
        .then(function(data){
          this.quote = data.body;
        })
    }
  }
}