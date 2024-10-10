import { ICalendarEvent } from '@/interfaces/ICalendarDetail'

// Local interface
interface IProps {
  calendarEvents?: ICalendarEvent[]
}

const CalendarEvents = ({ calendarEvents }: IProps) => {
  return (
    <div>
      {calendarEvents?.map((event, index) => (
        <div
          key={`${index}`}
          className='w-full flex flex-col mb-5 last:mb-0 pb-5 last:pb-0 space-y-3 border-b last:border-b-0 dark:border-slate-800/70 border-slate-200'
        >
          <div className='w-full flex justify-between'>
            {/* Avatar & profile name */}
            <div className='flex items-center space-x-3'>
              <div>
                <h3 className='font-semibold text-slate-950 dark:text-slate-100 text-base'>
                  {event.name}
                </h3>
                <p className='font-normal text-slate-600 dark:text-zinc-400 text-xs'>
                  {event.location}
                </p>
              </div>
            </div>

            {/* Rating */}
            {event.name && (
              <div className='flex space-x-1'>
                {/* <IconStarFilled className='w-3 md:w-4 text-yellow-500 dark:text-yellow-600 md:-mt-[3px] -mt-[5px]' /> */}

                <p className='font-semibold text-slate-950 dark:text-slate-100 text-base'>
                  {event.dateStart}
                  {/* {event.dateEnd} */}
                </p>
              </div>
            )}
          </div>

        </div>
      ))}
    </div>
  )
}

export default CalendarEvents
