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
              <Route path="/shoppingcart" element={<ShoppingCart/>} />
            </Route>
          </Routes>
        </section>

      </main>


      <AppFooter />
    </HashRouter>

  )
}

export default App
