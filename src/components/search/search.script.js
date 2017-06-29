

export default {
  name: 'SearchComponent',
  data() {
    return {
      quote: ''
    };
  },
  methods: {
    getQuote() {
      this.$http.get('http://localhost:8080/api/random-quote', (data) => {
        this.quote = data;
      }).catch((err) => console.log(err))
    }
  }
}