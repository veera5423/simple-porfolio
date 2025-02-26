import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './routes/App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './routes/Home.jsx'
import Bag from './routes/Bag.jsx'
import { Provider } from "react-redux"
import myntraStore from './store/index.js'
import OrderPlaced from './components/OrderPlaced.jsx'

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/bag", element: <Bag />
      },
      {
        path: "/place-order", element: <OrderPlaced />
      }

    ]



  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
