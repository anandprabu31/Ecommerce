import React from 'react'
import { Outlet } from 'react-router-dom'
import Navi from './Navi'
import { Provider } from 'react-redux'
import store from './Store/store'

const RouteLayout = () => {
  return (
    <Provider store={store}>
        <Navi/>
      <main>
        <Outlet/>
      </main>
    </Provider>
  )
}

export default RouteLayout
