import { Calendar } from 'react-date-range'
import { FaDollarSign } from 'react-icons/fa'
import { BsFillCartPlusFill } from 'react-icons/bs'
import { GiPlayerTime } from 'react-icons/gi'
import SalesLineChart from './SalesLineChart'
import { formatDistanceToNow } from 'date-fns'
import { useQuery } from '@tanstack/react-query'
import Loader from '../../Shared/Loader'
import { getGuestStat } from '../../../api/utilities'
const GuestStatistics = () => {
  const { data: statData = [], isLoading } = useQuery({
    queryKey: ['statData'],
    queryFn: async () => await getGuestStat(),
  })
  console.log("guestData",statData)
  if (isLoading) return <Loader />
  return (
    <div>
      <div className='mt-12'>
        {/* small cards */}
        <div className='mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {/* Spent Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden  absolute -mt-4 grid h-16 w-16 place-items-center `}
            >
              <FaDollarSign className='w-8 h-8 text-[#E802FF]' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Total Spent
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900'>
                ${statData?.totalSpent}
              </h4>
            </div>
          </div>

          {/* Total Bookings */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center `}
            >
              <BsFillCartPlusFill className='w-8 h-8 text-orange-500' />
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

          {/* Users Card */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
            <div
              className={`bg-clip-border mx-4 rounded-xl overflow-hidden absolute -mt-4 grid h-16 w-16 place-items-center `}
            >
              <GiPlayerTime className='w-8 h-8 text-green-600' />
            </div>
            <div className='p-4 text-right'>
              <p className='block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600'>
                Guest Since...
              </p>
              <h4 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900'>
                {statData?.guestSince &&
                  formatDistanceToNow(new Date(statData.guestSince))}
              </h4>
            </div>
          </div>
        </div>

        <div className='mb-4 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3'>
          {/* Total Sales Graph */}
          <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2'>
            <SalesLineChart data={statData?.chartData} />
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

export default GuestStatistics