import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Auth, BlogPage, Home, Pricing, Product} from './pages'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'product',
        element : <Product/>
      },
      {
        path : 'blog',
        element : <BlogPage/>
      },
      {
        path : 'pricing',
        element : <Pricing/>
      },
      {
        path : 'signup',
        element : <Auth/>
      },
      {
        path : 'login',
        element : <Auth/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
