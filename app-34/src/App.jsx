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
import Cart from "./Component/Cart/Cart";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="categories" element={<BookCategories />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
