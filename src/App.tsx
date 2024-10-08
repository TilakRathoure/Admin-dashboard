import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import {lazy,Suspense} from 'react'
import Loader from "./components/Loader";


const Products= lazy(()=>import("./pages/Products"));
const Dashboard= lazy(()=>import ("./pages/Dashboard"));
const Customers= lazy(()=>import("./pages/Customers"));
const Transactions=lazy(()=>import("./pages/Transactions"));
const NewProduct=lazy(()=>import("./pages/manage/NewProduct"));
const TransactionManage=lazy(()=>import("./pages/manage/TransactionManage"));
const ProductManage=lazy(()=>import("./pages/manage/ProductManage"))
const Line=lazy(()=>import("./pages/charts/Line"));
const Bar=lazy(()=>import("./pages/charts/Bar"));
const Pie=lazy(()=>import("./pages/charts/Pie"));
const Stopwatch=lazy(()=>import("./pages/applications/Stopwatch"))
const Coupon=lazy(()=>import("./pages/applications/Coupon"))
const Toss=lazy(()=>import("./pages/applications/Toss"))

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

        <Route element={<Line/>} path="/admin/line"/>
        <Route element={<Bar/>} path="/admin/bar"/>
        <Route element={<Pie/>} path="/admin/pie"/>

        <Route element={<Stopwatch/>} path="/admin/stopwatch"/>
        <Route element={<Toss/>} path="/admin/toss"/>
        <Route element={<Coupon/>} path="/admin/coupon"/>

        



      </Routes>

      </Suspense>

    </Router>
  )
}

export default App