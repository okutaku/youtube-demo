import React, { createContext, useReducer} from 'react'

//stateとdispatch関数の追加
const initialState = {
  popular: [],
  selected: {}
}

//initialStateに複数のデータが含まれていたら、スプレット構文を使い、state追加。マージされるわけでなく、上書きされるためstateを展開せずに行うと、きえる
const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_POPULAR':
      return{ ...state, popular: action.payload.popular }
    case 'SET_SELECTED':
      return { ...state, selected: action.payload.selected}
      default:
      return state
  }
}
//初期値の追加
export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

//valueを書くことで参照することができる
export const StoreProvider = ({children}) => {
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}