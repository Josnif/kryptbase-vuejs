import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
        count: 0,
        contract: '',
        products: [
          {
                name: 'Apple',
                description: 'An apple a day keeps the doctor away.',
                price:'0.008',
                image:'apple.jpg',
                units: 0
            },
            {
                name:'Orange',
                description:'Oranges are low in calories and full of nutrients, they promote clear, healthy and skin.',
                price:'0.019',
                image:'orange.jpg',
                units: 0
            },
            {
                name:'Banana',
                description:'Bananas are one of the most widely consumed fruits in the world for good reason.',
                price:'0.015',
                image:'banana.jpg',
                units: 0
            }
        ],
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

    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

export default store;