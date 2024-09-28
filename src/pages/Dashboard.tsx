import AdminSidebar from "../components/AdminSidebar"

const Dashboard = () => {



  return (
    <div className="flex">

      <div className="w-[25%] h-[100vh]">

      <AdminSidebar/>

      </div>

      <main className="w-full bg-gray-100">

        <span className="">This is madfsin</span>
      </main>


    </div>
  )
}

export default Dashboard