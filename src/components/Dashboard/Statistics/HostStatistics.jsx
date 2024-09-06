import { Calendar } from 'react-date-range'
import { FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { GiPlayerTime } from 'react-icons/gi'
import SalesLineChart from './SalesLineChart'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../Shared/Loader'
import { getHostStat } from '../../../api/utilities'
import { MdErrorOutline } from "react-icons/md";

const HostStatistics = () => {
  const { data: statData = [], isLoading } = useQuery({
    queryKey: ['statData'],
    queryFn: async () => await getHostStat(),
  })
  console.log("host statdata",statData)
  if (isLoading) return <Loader />
  return (
    <div>
      <div className='mt-12'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* Sales Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden  absolute -mt-4 grid h-16 w-16 place-items-center  `}
            >
              <FaDollarSign className='w-8 h-8 text-[#E802FF]' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Sales
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                ${statData?.totalSale}
              </h4>
            </div>
          </div>

          {/* Total Bookings */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center`}
            >
              <BsFillCartPlusFill className='w-8 h-8 text-yellow-400' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Bookings
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.bookingCount}
              </h4>
            </div>
          </div>
          {/* Total Rooms */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden  absolute -mt-4 grid h-16 w-16 place-items-center `}
            >
              <BsFillHouseDoorFill className='w-8 h-8 text-orange-500' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Rooms
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.roomCount}
              </h4>
            </div>
          </div>

          {/* Users Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden  absolute -mt-4 grid h-16 w-16 place-items-center `}
            >
              <GiPlayerTime className='w-6 h-6 text-green-600' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Host Since...
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.hostSince &&
                  formatDistanceToNow(new Date(statData.hostSince))}
              </h4>
            </div>
          </div>
        </div>

        <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {/* Total Sales Graph */}
          <div className='relative flex  flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
          
          {
              statData?.bookingCount? <SalesLineChart data={statData?.chartData} /> :<div className=' my-auto flex-col '><MdErrorOutline className='mx-auto text-yellow-400 text-7xl' /><p className=' text-lg font-semibold text-center'>no room has been booked</p></div>
          }
          
           
          </div>
          {/* Calender */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden'>
            <Calendar color='#F43F5E' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HostStatistics