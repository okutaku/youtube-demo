import React, { createContext, useReducer} from 'react'

//stateとdispatch関数の追加
const initialState = {
  popular: []
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_POPULAR':
      return{ popular: action.payload.popular }
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