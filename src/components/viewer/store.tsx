import { create } from 'zustand'
import { Image } from '../../types'

export interface State {
  image: Image | null
  setImage: (image: Image) => void
}

const useImage = create<State>((set) => ({
  image: null,
  setImage: (image) => set({ image }),
}))

export default useImage