import { HashRouter, Route, Routes } from "react-router-dom";
import AppContainer from "./routes/AppContainer";
import AppFooter from "./shared/AppFooter";
import AppHeader from "./shared/AppHeader";
import { ProtectedRoutes } from "./routes/ProtectedRoutes";
import ProductDetails from "./routes/ProductDetails";
import LogIn from './routes/LogIn';
import SingUp from './routes/SignUp';





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
              <Route path="/user" element={<h1>User identification</h1>} />
              <Route path="/purchases" element={<h1>User purchases</h1>} />
            </Route>
          </Routes>




        </section>

      </main>


      <AppFooter />
    </HashRouter>

  )
}

export default App
