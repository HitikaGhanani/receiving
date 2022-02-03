import { MutationTree } from 'vuex'
import ProductState from './ProductState'
import * as types from './mutation-types'

const mutations: MutationTree<ProductState> = {
  [types.PRODUCT_ADD_TO_CACHED_MULTIPLE](state, payload) {
    if (payload.products) {
      payload.products.forEach((product: any) => {
        state.cached[product.productId] = product
      });
    }
  },
  [types.PRODUCT_LIST_UPDATED](state, payload) {
    state.list.items = payload
  },
  [types.PRODUCT_SEARCH_UPDATED] (state, payload) {
    state.searchedProduct = payload
  }
}
export default mutations;
