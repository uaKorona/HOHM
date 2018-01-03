import Vue from 'vue'
import Component from 'vue-class-component'
import currencyList from '../../store/modules/currencyList'

@Component
export default class CurrencyList extends Vue {
    msg = 'Welcome to Your Vue.js App';

    created(){
        this.$store.dispatch(currencyList.types.GET_CURRENCY_LIST)
    }

}
