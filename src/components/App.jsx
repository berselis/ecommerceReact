import { HashRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./routes/AppContainer";
import AppFooter from "./shared/AppFooter";
import AppHeader from "./shared/AppHeader";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import ProductDetails from "./routes/ProductDetails";
import LogIn from './routes/LogIn';
import SingUp from './routes/SignUp';
import User from "./routes/User";
import Purchases from "./routes/Purchases";
import ShoppingCart from "./routes/ShoppingCart";

function App() {


  function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
    for (let num of nums) {
      if (num > max_num) {
        // (Fill in the missing line here)
      }
    }
    return max_num;
  }

  console.log(find_max([25, 56, -8, 7, 5, 9, 87, 45, 0, 87, 6, 21, 45, .05]))

  return (

    <HashRouter>
      <AppHeader />
      <main className="content">
        <section>

          <Routes>
            <Route path="/" element={<AppContainer />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SingUp />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/user" element={<User />} />
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/shoppingcart" element={<ShoppingCart />} />
            </Route>
          </Routes>
        </section>

      </main>


      <AppFooter />
    </HashRouter>

  )
}

export default App
