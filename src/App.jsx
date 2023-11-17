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
    </Routes>
  );
}



export default App;
