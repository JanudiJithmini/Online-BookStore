import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Component/Layout/RootLayout";
import Home from "./Component/HomePage/HomePage";
import BookCategories from "./Component/BookCategory/BookCategory";
import Contact from "./Component/Contact/Contact";
import Cart1 from "./Component/Cart/Cart1";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import Cart2 from "./Component/Cart/Cart2";
import Cart3 from "./Component/Cart/Cart3";
import Cart4 from "./Component/Cart/Cart4";
import Cart5 from "./Component/Cart/Cart5";
import Cart6 from "./Component/Cart/Cart6";
import Cart7 from "./Component/Cart/Cart7";
import Cart8 from "./Component/Cart/Cart8";
import Cart9 from "./Component/Cart/Cart9";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<BookCategories />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart1" element={<Cart1 />} />
      <Route path="cart2" element={<Cart2 />} />
      <Route path="cart3" element={<Cart3 />} />
      <Route path="cart4" element={<Cart4 />} />
      <Route path="cart5" element={<Cart5 />} />
      <Route path="cart6" element={<Cart6 />} />
      <Route path="cart7" element={<Cart7 />} />
      <Route path="cart8" element={<Cart8 />} />
      <Route path="cart9" element={<Cart9 />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
