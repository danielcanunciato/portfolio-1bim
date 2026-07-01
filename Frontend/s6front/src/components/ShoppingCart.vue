<template>
  <div class="shopping-cart">
    <h1>Loja Virtual - Empresa Q</h1>
    
    <!-- Exibição do Getter: Total de itens no carrinho -->
    <p>Itens no carrinho: <strong>{{ cartItemCount }}</strong></p>

    <!-- Botão que dispara a ação solicitada no roteiro -->
    <button @click="adicionarProduto">
      Adicionar Produto ao Carrinho
    </button>

    <hr>

    <h3>Lista de Compras:</h3>
    <ul>
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - R$ {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'ShoppingCart',
  computed: {
    // Acessa o estado 'cart' e o getter 'cartItemCount' da Store
    ...mapState(['cart']),
    ...mapGetters(['cartItemCount'])
  },
  methods: {
    // Mapeia a action 'addToCart' definida no index.js do Vuex
    ...mapActions(['addToCart']),

    // Função disparada pelo clique do botão
    adicionarProduto() {
      const produtoExemplo = {
        id: Date.now(),
        name: "Produto Teste",
        price: 49.90
      };
      
      // Chama a action do Vuex
      this.addToCart(produtoExemplo);
    }
  }
}
</script>

<style scoped>
  .shopping-cart {
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  button {
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #35495e;
  }
</style>
