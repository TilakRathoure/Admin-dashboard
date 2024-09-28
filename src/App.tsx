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
        
        <Route element={<Products/>} path="/admin/products"/>
        <Route element={<Dashboard/>} path="/admin/dashboard"/> 
        <Route element={<Customers/>} path="/admin/Customers"/>
        <Route element={<Transactions/>} path="/admin/Transactions"/>

      </Routes>

      </Suspense>

    </Router>
  )
}

export default App