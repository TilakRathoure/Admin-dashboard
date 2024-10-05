import { ReactElement, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import TableHOC from "../components/TableHOC"
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}

const column:Column <DataType>[]=[
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },

]

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

const arr: DataType[] = [
  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img}
        alt="Shoes"
      />
    ),
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: (
      <img
        style={{
          borderRadius: "50%",
        }}
        src={img2}
        alt="Shoes"
      />
    ),
    name: "May Scoot",
    email: "aunt.may@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const Search = () => {

  const [data] = useState<DataType[]>(arr);

  const Table = TableHOC<DataType>(
    column,data,"customer-table","Customer",true
  )();

  return (
    <div className="flex h-screen">

    <div className="w-1/4 h-[100vh]">


    <AdminSidebar/>



    </div>

    <div className="w-3/4 bg-gray-100">

    {/* Table */}

    <div className="p-6 rounded-lg">
      {Table}
    </div>

    </div>

    </div>
  )
}

export default Search