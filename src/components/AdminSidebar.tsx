import React from 'react'
import { IconType } from 'react-icons';
import { FaChartBar, FaRegCreditCard, FaUsers, FaStopwatch, FaTicketAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {


    interface Topic {
        topic: string;
        items: { 
          title: string;
          icon: IconType;
        }[];
      }
      

    const topics: Topic[] = [
        {
          topic: "Dashboard",
          items: [
            { title: "Dashboard", icon: FaChartBar },
            { title: "Products", icon: FaRegCreditCard },
            { title: "Customers", icon: FaUsers },
            { title: "Transactions", icon: FaTicketAlt }
          ]
        },
        {
          topic: "Charts",
          items: [
            { title: "Bar", icon: FaChartBar },
            { title: "Pie", icon: FaChartBar },
            { title: "Line", icon: FaChartBar }
          ]
        },
        {
          topic: "Apps",
          items: [
            { title: "Stopwatch", icon: FaStopwatch },
            { title: "Coupon", icon: FaTicketAlt }
          ]
        }
      ];
      



  return (
    <aside className='p-4 pl-6 text-gray-100 h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-10 border-r-2 border-r-gray-700'>

        <h1 className='text-2xl mb-2 font-bold'>ShopHere.</h1>

        <div className='p-3'>

        {topics.map((e)=>(

            <div className='flex flex-col gap-3 mb-4'>
            <h2 className='text-base'>{e.topic}</h2>

            <ul className='flex flex-col'>
                {e.items.map((elements)=>{

                  const isActive= location.pathname.includes(`/admin/${elements.title.toLowerCase()}`)

                    return(
                      <Link to={"/admin/"+elements.title.toLowerCase()}>
                   <li className={`cursor-pointer h-[45px] flex items-center gap-3 ml-4 px-2 py-1 rounded-lg w-[85%] ${isActive ? 'bg-blue-100 text-blue-700' : ''}`}>
                       {React.createElement(elements.icon)} {elements.title}</li>

                       </Link>
                      
                      )})

                }

            </ul>

            </div>



        ))}

        </div>

    </aside>
  )
}

export default AdminSidebar