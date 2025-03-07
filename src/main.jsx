import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import Servicios from './components/servicios.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserRouter, RouterProvider,Navigate } from 'react-router-dom';

const router = createBrowserRouter([
  {path:"/", element:<App/>},
  // {path:"servicios", element:<Servicios/>},
  {path:"*", element:<Navigate to="/" />}
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
