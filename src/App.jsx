import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import React from 'react';
import Defaultp from "./pages/defaultp";
import { RouterProvider,Navigate } from 'react-router-dom';

function App  ()  {
  return (
    <div><Home/></div>
  );
};

export default App;

// export const approuter = createBrowserRouter([
//   {path:"/", element:<Home/>},
//   {path:"servicios", element:<Home/>},
//   {path:"*", element:<Navigate to="/#home" />}
// ]);

