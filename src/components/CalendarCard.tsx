import { BaseSyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
// Interfaces
import { ICalendar } from 'interfaces/ICalendar'
// Components
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
// Images
import { Dummy } from '@/assets/images'
// Icons
import { IconStarFilled } from '@tabler/icons-react'
// Style effect
import 'react-lazy-load-image-component/src/effects/black-and-white.css'

// Local Interfaces
interface IProps {
  calendar: ICalendar
}

const CalendarCard = ({ calendar }: IProps) => {

  return (
    <>
      <Link
        to={`/movie/detail/${calendar.permalink}`}
        className='w-full h-auto md:h-[250px] lg:h-[300px] mb-3 rounded-2xl'
      >
        {/* Image */}
        <LazyLoadImage
          src={calendar.coverUrl}
          alt={calendar.name}
          useIntersectionObserver={true}
          threshold={100}
          placeholderSrc={<div className='bg-slate-300 dark:bg-slate-800 animate-pulse' />}
          onError={(event: BaseSyntheticEvent) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = Dummy
          }}
          effect='black-and-white'
          width='100%'
          className='w-full h-[220px] md:h-[250px] lg:h-[300px] object-center object-cover rounded-2xl cursor-pointer shadow-lg'
        />
      </Link>
      {/* Movie name */}
      <Link
        to={`/movie/detail/${calendar.permalink}`}
        className='text-sm md:text-base text-slate-900 dark:text-slate-100 text-ellipsis mb-1 sm:mb-2 line-clamp-1 cursor-pointer'
      >
        {calendar.name}
      </Link>
      {/* Release date & rating */}
      <div className='flex justify-between items-center'>
        <p className='text-xs md:text-sm text-slate-600 dark:text-zinc-400'>
          {calendar.tenantCode}
        </p>

        {Number(calendar.eventCount) > 0 && (
          <div className='flex justify-between items-center space-x-1'>
            <IconStarFilled className='w-3 md:w-4 text-yellow-500 dark:text-yellow-600 -mt-[3px]' />
            <p className='text-xs md:text-sm text-slate-600 dark:text-zinc-400'>
              {String(calendar.eventCount).substring(0, 3)}
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default trackWindowScroll(CalendarCard)
