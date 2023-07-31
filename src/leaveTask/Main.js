import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/rootLayouts/router'

function Main() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Main