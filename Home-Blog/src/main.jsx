import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
       path : "/",
       element : < Home />
      },
      {
      path : "/blogs",
      element : < Blogs />
      },
      {
      path : "/services",
      element : < Services />
      },
      {
      path : "/about",
      element : < About />
      },
      {
      path : "/contact",
      element : < Contact />
      },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
