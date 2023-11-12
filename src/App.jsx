//imports
import {
  createBrowserRouter,
  Link,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

//import pages
import Home from "./pages/Home"



// data

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);


import React from 'react'

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/blog/*" element={<BlogApp />} />
      <Route path="/users/*" element={<UserApp />} /> */}
    </Routes>
  );
}



export default App;
