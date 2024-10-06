import { Column } from "react-table";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { ReactElement, useState } from "react";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status: ReactElement;
  action: ReactElement;
}

const coloumn: Column<DataType>[]=[

  {
    Header:"User", accessor:"user"
  },
  {
    Header:"Amount", accessor:"amount"
  },
  {
    Header:"Discount", accessor:"discount"
  },
  {
    Header:"Quantity", accessor:"quantity"
  },
  {
    Header:"Status", accessor:"status"
  },
  {
    Header:"Action", accessor:"action"
  },

];

const arr: DataType[] = [
  {
    user: "Charas",
    amount: 4500,
    discount: 400,
    quantity: 3,
    status: <span className="red">Processing</span>,
    action: <Link to="/admin/transactions/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="green">Shipped</span>,
    quantity: 6,
    action: <Link to="/admin/transactions/sajknaskd">Manage</Link>,
  },
  {
    user: "Xavirors",
    amount: 6999,
    discount: 400,
    status: <span className="purple">Delivered</span>,
    quantity: 6,
    action: <Link to="/admin/transactions/sajknaskd">Manage</Link>,
  },
];


const Transactions = () => {

  const [data]= useState<DataType[]>(arr)

  const Table= TableHOC(
    coloumn,data,
    "transaction-table",
    "Transaction",
    true
  )();


  return (
    <div className="flex h-screen">

    <div className="w-1/4 h-[100vh]">


    <AdminSidebar/>

    </div>

    <div className="w-3/4 bg-gray-100 overflow-auto p-7">

    {/* TABLE */}

    <div className="">
    {Table}
    </div>

    </div>

    </div>
  )
}

export default Transactions