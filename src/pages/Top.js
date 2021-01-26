import React, { useEffect, useContext } from 'react'
import Layout from '../coponents/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'

const Top = () => {
  //useContextを使用することでstore内の値を参照できる
  const { globalState, setGlobalState } = useContext(Store)

  useEffect( () => {
    fetchPopularData().then((res) => {
      console.log('data',res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items} })
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  })
  return (
    <Layout>
      Top page
    </Layout>
  )
}

export default Top