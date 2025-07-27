import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Todo from './pages/todo'
import UserById from './pages/userById'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "services",
          element: <Services />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "todo",
          element: <Todo />
        },
        {
          path: "userById/:id",
          element: <UserById />
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App