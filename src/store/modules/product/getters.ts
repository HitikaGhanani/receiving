import { GetterTree } from 'vuex'
import ProductState from './ProductState';
import RootState from '@/store/RootState'

const getters: GetterTree<ProductState, RootState> = {
  getProduct: (state) => (productId: string) => {
    return state.cached[productId] ? state.cached[productId] : {};
  },
  getSearchedProduct: (state) => {
    return state.searchedProduct
  } 
}
export default getters;