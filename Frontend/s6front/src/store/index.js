import { createStore } from 'vuex'

export default createStore({
  state: {
    // Dados centrais do seu projeto
    cart : [],
  },
  mutations: {
    // Única forma de alterar o estado (síncrono)
    ADD_TO_CART(state,product){
        state.cart.push(product);
    }
  },
  actions: {
    // Ações assíncronas que chamam mutações
    addToCart({commit},product){
        commit('ADD_TO_CART',product);
    }
  },
  getters: {
    // Propriedades computadas da store
    cartItemCount: state => {
        return state.cart.length;
    }
  }
})
