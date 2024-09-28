import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {lazy,Suspense} from 'react'
import Loader from "./components/Loader";


const Products= lazy(()=>import("./pages/Products"));
const Dashboard= lazy(()=>import ("./pages/Dashboard"));
const Customers= lazy(()=>import("./pages/Customers"));
const Transactions=lazy(()=>import("./pages/Transactions"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>

        <Route element={<Products/>} path="/dashboard"/>
        <Route element={<Dashboard/>} path="/Products"/>
        <Route element={<Customers/>} path="/Customers"/>
        <Route element={<Transactions/>} path="/Transactions"/>

      </Routes>

      </Suspense>

    </Router>
  )
}

export default App