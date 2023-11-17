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
import Create from "./pages/Create"
import Update from "./pages/Update"
import PostDetail from "./pages/PostDetail";



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
      <Route path="/create/" element={<Create />} />
      {/* <Route path="/blog/*" element={<BlogApp />} />
      <Route path="/users/*" element={<UserApp />} /> */}
      <Route path="/info/:id" element={<PostDetail />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
  );
}



export default App;
