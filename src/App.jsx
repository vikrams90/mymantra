import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import Authentication from "./screens/Authentication";
import CategoryPage from "./screens/CategoryPage";
import SearchResult from "./screens/SearchResult";
import SingleProduct from "./screens/SingleProduct";
import WishListScreen from "./screens/WishListScreen";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        errorElement={<>something went wrong go back</>}
        element={<Home />}
      >
        <Route index element={<Landing />} />
        <Route path='auth' element={<Authentication />}></Route>
        <Route
          path='shop'
          element={
            <>
              <Outlet />
            </>
          }
        >
          <Route index element={<>shop</>} />
          <Route path='men' element={<>men</>} />
          <Route path='women' element={<>women</>} />
          <Route path='kids' element={<>kids</>} />
          <Route path='home' element={<>home and living</>} />
          <Route path=':category' element={<CategoryPage />} />
        </Route>
        <Route path='wishlist' element={<WishListScreen/>}></Route>
        <Route path='cart' element={<>cart</>}></Route>
        <Route path='search' element={<Outlet />}>
          <Route path=':query' element={<SearchResult />} />
        </Route>
        <Route path="product" element={<Outlet/>}>
          <Route path=":id" element={<SingleProduct/>} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
