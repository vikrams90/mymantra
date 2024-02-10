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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        errorElement={<>something went wrong go back</>}
        element={<Home />}
      >
        <Route index element={<Landing />} />
        <Route path="auth" element={<>login and signup</>}></Route>
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
        </Route>
        <Route path="wishlist" element={<>wishlist</>}>
          
        </Route>
        <Route path="cart" element={<>cart</>}>

        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
