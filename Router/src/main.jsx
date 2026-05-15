import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Services } from './pages/Services.jsx';
import { Navbar } from './pages/Navbar.jsx';
import Learn from './pages/Learn.jsx';
import Whyus from './pages/Whyus.jsx';
import UserDetails from './pages/UserDetails.jsx';

const dataPromise = fetch("https://jsonplaceholder.typicode.com/users")
                    .then(response => response.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      { index: true, Component: Home },
      { path: "/about", Component: About },
      { path: "contact", Component: Contact },
      { path: "/services", Component: Services },
      { path: "/home", Component: Home },
      {
        path: '/learn',
        Component: Learn,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      }
      ,
      {
        path: '/whyus',
        element: <div>
          <Whyus dataPromise={dataPromise}> </Whyus>
        </div>
      },
      {
        // here start concept of dynamic routing 
        path:'/user/:userId',
        Component:UserDetails,

      }

    ]

  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
