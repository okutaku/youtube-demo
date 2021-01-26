import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'

const VideoDetail = () => {
  const location = useLocation()
  //パス、パラメーター、ドムを取得する事ができる
  useEffect(() => {
      const searchParams = new URLSearchParams(location.search)
      const id = searchParams.get('v')
      console.log('id', id)
  },[])
  return(
    <div>

    </div>
  )
}

export default VideoDetail