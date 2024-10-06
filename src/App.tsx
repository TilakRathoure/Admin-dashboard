import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {lazy,Suspense} from 'react'
import Loader from "./components/Loader";


const Products= lazy(()=>import("./pages/Products"));
const Dashboard= lazy(()=>import ("./pages/Dashboard"));
const Customers= lazy(()=>import("./pages/Customers"));
const Transactions=lazy(()=>import("./pages/Transactions"));
const NewProduct=lazy(()=>import("./pages/NewProduct"));
const TransactionManage=lazy(()=>import("./pages/TransactionManage"));
const ProductManage=lazy(()=>import("./pages/ProductManage"))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
      <Routes>

        <Route element={<Products/>} path="/admin/products"/>
        <Route element={<Dashboard/>} path="/admin/dashboard"/> 
        <Route element={<Customers/>} path="/admin/customers"/>
        <Route element={<Transactions/>} path="/admin/transactions"/>

        <Route element={<NewProduct/>} path="/admin/products/new"/>
        <Route element={<ProductManage/>} path="/admin/products/:id"/>
        <Route element={<TransactionManage/>} path="/admin/transactions/:id"/>

      </Routes>

      </Suspense>

    </Router>
  )
}

export default App