import AdminSidebar from "../components/AdminSidebar";
import { BsSearch} from "react-icons/bs"; 
import { FaRegBell } from "react-icons/fa";
import Image1 from "../assets/user.png";
import { HiTrendingDown,HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart,DoughnutChart } from "../components/Chart";
import { BiMaleFemale } from "react-icons/bi";

const Dashboard = () => {

  interface dash{

    heading:string,
    price:number,
    change:number,
    graph:number
    color:string;

  }

  const DashElements: dash[]=[{heading:"Revenue",price:24200,change:35,graph:32,color:"yellow"},{heading:"Users",price:244,change:-25,graph:43,color:"purple"},{heading:"Transactions",price:43000,change:12,graph:12,color:"green"},{heading:"Products",price:1400,change:25,graph:22,color:"blue"}];



  return (
    <div className="flex h-screen">

      <div className="w-1/4 h-[100vh]">


      <AdminSidebar/>


      </div>

      {/* Main */}

      <main className="w-3/4 bg-gray-100 overflow-y-auto p-6 gap-5 flex flex-col">
      <header className="flex items-center gap-2 border-b-[3px] pb-3"><BsSearch/><input type="text" placeholder="Search for data, users, docs" className="flex-grow border-none bg-transparent p-1 outline-none focus:border-none" /><FaRegBell/><img className="w-7" src={Image1} alt="" /></header>

      <div className="flex gap-2 justify-between">
        {DashElements.map((elements)=>(

          <div className="flex bg-white w-[16rem] h-[8rem] rounded-xl p-4 justify-around">

            <div className="flex flex-col ">
            <h1>{elements.heading}</h1>
            <h1 className="text-2xl font-bold">{elements.heading==="Revenue"? '$' :''}{elements.price}</h1>
            {elements.change>0 ? <p className="flex items-center gap-1"><HiTrendingUp className="text-green-500"/><span className="text-green-500">+{elements.change}</span></p>:<p className="flex items-center gap-1"><HiTrendingDown className="text-red-500"/><span className="text-red-500">{elements.change}</span></p>}

            </div>

            <div className="flex items-center justify-center">
            <div className="flex-shrink-0 flex justify-center items-center h-[5rem] w-[5rem] rounded-full" style={{background: `conic-gradient(${elements.color} 0deg ${Math.abs(elements.graph) / 100 * 360}deg, transparent 0deg)`}}>
              <div className="flex-shrink-0 flex items-center justify-center bg-white h-[4rem] w-[4rem] rounded-full text-center"><span>{elements.graph}</span></div>
              </div>
              </div>


              </div>

        ))}
      </div>

      {/* Chart and invertory */}

      {/* chart */}


      <div className="w-full flex gap-7">

        <div className="w-3/4 bg-white rounded-xl p-5">

        <h1 className="text-2xl opacity-60 uppercase text-center">Revenue & Transaction</h1>

                    {/* Grapph here */}
                    <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />


        </div>


        {/* INVENTORY */}

        <div className="w-[23.5%] bg-white rounded-lg p-5 flex flex-col gap-6">

        <h1 className="text-2xl opacity-60 uppercase text-center">Inventory</h1>

        <div className="flex flex-col gap-4">

        {data.inventory.map((elements)=>(

          <div>

            <div className="flex items-center justify-evenly gap-2">
              <div className="">{elements.heading}</div>
              <div className="w-[95px] bg-gray-200 rounded-xl h-[15px]"><div className="bg-green-400 rounded-xl h-[15px]" style={{ width: `${elements.value}%` }}></div></div>
              <div>{elements.value}</div>


            </div>

            </div>

            

        ))}

        </div>
        </div>
      </div>

      <section className="transaction-container">
          <div className="gender-chart w-2/6 flex flex-col gap-3 bg-white rounded-lg p-5">
            <h2 className="text-2xl opacity-60 uppercase text-center">Gender Ratio</h2>


            <div className="flex relative justify-center items-center">

            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />

              <BiMaleFemale className="absolute w-[30px] h-[30px]"/>
          </div>
          </div>

          {/* <Table data={data.transaction} /> */}
        </section>



      

      </main>


    </div>
  )
}

export default Dashboard