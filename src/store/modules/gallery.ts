import getGalleryItems from "../../services/get-gallery-items"
import IGalleryItem from "../../models/gallery-item"

export interface State {
    galleryItems: IGalleryItem[]
}

// initial state
const state = () => ({
    galleryItems: [] as IGalleryItem[],
    
  })
  
  // getters
  const getters = {
    getGalleryItems(state:State){
        return state.galleryItems.slice(0,10)
    },
    getEvenItems(state:State){
       return state.galleryItems.filter((item:IGalleryItem) => item.id % 2 === 0 ).slice(0,10)
    },
    getOddItems(state:State){
        return  state.galleryItems.filter((item:IGalleryItem) => item.id % 2 !== 0 ).slice(0,10)
    }
  }
  
  // actions
  const actions = {
    async getGalleryItems ({ commit }:{commit:(action:string, items:IGalleryItem[]) => void}) {
      const items = await getGalleryItems()
      commit('setGalleryItems', items)
    }
  }
  
  // mutations
  const mutations = {
    setGalleryItems (state:State, galleryItems:IGalleryItem[]) {
      state.galleryItems = galleryItems
    },
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }