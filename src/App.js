import './App.css';
import Home from "./pages/Home";
import Product from "./pages/Product";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/products",
        element: <Product />
    }
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
