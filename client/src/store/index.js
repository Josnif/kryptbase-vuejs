import { createStore } from 'vuex'

import { account } from './account.module'
import { products } from './products.module'
import { cart } from './cart.module'

// Create a new store instance.
const store = createStore({
  modules: {
    account,
    products,
    cart
  },
  state () {
    return {
        menuItems: [
            {
              id: 1,
              title: "Home",
              link: ""
            },
            {
              id: 2,
              title: "Products",
              link: "products"
            },
            {
              id: 3,
              title: "Contact",
              link: "contact"
            },
            {
              id: 4,
              title: "Tutorials",
              link: "tutorials"
            }
        ],
        isLoading: false,
    }
  },
  getters: {
    // getFruitStock: (state) => (name) => {
    //     const product = state.products.filter(() => (item.name==name));
    //     if (product && product.length > 0) {
    //         return product;
    //     }
    //     return 0;
    // }
  }
})

export default store;