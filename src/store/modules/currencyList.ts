import axios from 'axios'

const GET_CURRENCY_LIST = 'GET_CURRENCY_LIST';

const state = {
  list: []
};

const actions = {

    getCurrencyList({ commit }) {
        axios
            .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
            .then(response => {
                console.log( response );
                const currencyList =  response.data;
                commit(GET_CURRENCY_LIST, { currencyList })
            })
    }

};

const mutations = {
    [GET_CURRENCY_LIST](state, {currencyList}){
        state.list = currencyList;
    }
};


export default {
    state,
    actions,
    mutations,
    types: {
        GET_CURRENCY_LIST
    }
}