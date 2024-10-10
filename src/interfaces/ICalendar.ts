import { ICalendarEvent } from "./ICalendarDetail"

export interface ICalendar {
  id?: string
  name?: string
  description?: string
  isPublished?: boolean
  coverUrl?: string
  interactionUrl?: string
  permalink?: string
  tenantCode?: string
  eventCount: number
  calendarEvents: ICalendarEvent[]
}
