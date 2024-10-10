import iTakvimApi from "./iTakvimBaseService"

export const getTenantCalendars = async (tenantCode: string, payload: object) => {
  const response = await iTakvimApi().get(`/calendars/search?tenantCode=${tenantCode}&includeEvents=false`, { params: payload })
  return response
}

export const getCalendar = async (permalink: string, payload: object) => {

  const response = await iTakvimApi().get(`/calendars/${permalink}`, { params: payload })
  return response
}