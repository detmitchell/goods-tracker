import SearchComponent from '../search/index.vue';
import ResultsComponent from '../results/index.vue';

export default {
  name: 'HomeComponent',
  components: {
    'search': SearchComponent,
    'results': ResultsComponent
  },
  data(){
    return {
      sharedData: this.$root.$data
    };
  }
}