export interface ICalendarEvent {
  id: string
  calendarId: string
  name?: string
  location?: string
  dateStamp?: string
  dateStart?: string
  dateEnd?: string
  status?: string
  class?: string
  transparancy?: string
  recurrenceRule?: string
  categories?: string
  organizer?: string
  interactionUrl?: string
}
