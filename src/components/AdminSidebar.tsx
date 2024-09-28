import React from 'react'
import { IconType } from 'react-icons';
import { FaChartBar, FaRegCreditCard, FaUsers, FaStopwatch, FaTicketAlt, FaRocket } from 'react-icons/fa';

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
            { title: "Product", icon: FaRegCreditCard },
            { title: "Customer", icon: FaUsers },
            { title: "Transaction", icon: FaTicketAlt }
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
            { title: "Coupon", icon: FaTicketAlt },
            { title: "Toss", icon: FaRocket }
          ]
        }
      ];
      



  return (
    <aside className='p-2'>

        <h1 className='text-2xl mb-2 font-bold'>Logo.</h1>

        <div className='p-3'>

        {topics.map((e)=>(

            <div className='flex flex-col gap-3 mb-4'>
            <h2 className='text-base'>{e.topic}</h2>

            <ul className='flex flex-col g'>
                {e.items.map((elements)=>{

                    const isActive = location.pathname.includes(elements.title.toLowerCase());

                    return(
                   <li className={`cursor-pointer flex items-center gap-3 ml-4 px-2 py-1 rounded-lg w-[75%] ${isActive ? 'bg-blue-100 text-blue-700' : ''}`}>
                       {React.createElement(elements.icon)} {elements.title}</li>
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