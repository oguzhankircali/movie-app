import { useEffect, useState } from 'react'
// Services
import { getTenantCalendars } from '@/services/iTakvimApi'
// Interfaces
import type { IToggle } from '@/interfaces/IToggle'
// Components
import CalendarCard from '../CalendarCard'
import MovieCardSkeleton from 'components/skeleton/MovieCardSkeleton'
import Toggle from 'components/Toggle'
import { ICalendar } from '@/interfaces/ICalendar'

interface IProps {
  slotName: string,
  tenantCode: string
}

const TrendingSection = ({ tenantCode, slotName }: IProps) => {
  // Variables
  const apiKey: string = import.meta.env.VITE_API_KEY
  const [firstLoad, setFirsLoad] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [calendars, setCalendars] = useState<ICalendar[]>([])
  const [toggleActive, setToggleActive] = useState<string>('day')
  const toggles: IToggle[] = [
    { id: 'day', label: 'Today' },
    { id: 'week', label: 'This Week' },
  ]

  // Get data
  const getData = async () => {
    setIsLoading(true)
    //const { data } = await getTrending(toggleActive, { api_key: apiKey })
    const { data } = await getTenantCalendars(tenantCode, { api_key: apiKey })

    if (data) {
      //setMovies(data.results || [])
      setCalendars(data || [])
      
      setIsLoading(false)
      if (firstLoad) setFirsLoad(false)
    }
  
  }

  // Get data when toggle is change
  useEffect(() => {
    if (!firstLoad) getData()
  }, [toggleActive])

  // Mounted
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div>
        <div className='flex justify-between mb-4'>
          {/* Title */}
          <h3 className='text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-50 tracking-wide antialiased'>
            {slotName}
          </h3>
          {/* Toggle */}
          <Toggle
            toggles={toggles}
            toggleActive={toggleActive}
            handleChangeToggle={setToggleActive}
          />
        </div>

        {/* Movie List */}
        <div className='flex space-x-5 snap-x overflow-x-auto no-scrollbar scroll-smooth'>
          {/* If not loading & have data */}
          {!isLoading &&
            calendars.length > 0 &&
            calendars.map((calendar) => {
              return (
                <div
                  key={calendar.id}
                  className='min-w-[155px] md:min-w-[170px] lg:min-w-[180px] flex flex-col'
                >
                  <CalendarCard calendar={calendar} />

                </div>
              )
            })}

          {/* If loading */}
          {isLoading && <MovieCardSkeleton isHorizontal={true} />}
        </div>
      </div>
    </>
  )
}

export default TrendingSection
