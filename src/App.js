import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Linktree from './pages/linktree.js';
import Error from './components/error.js'
import Footer from './components/footer';
import Contact from './pages/contact.js';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Linktree />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <Error />,
    }
  ]);

  return (
    <div id='page--container'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
