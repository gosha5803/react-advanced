import { Dayjs } from "dayjs"
import { Moment } from "moment"

export const formatDate = (date: Dayjs): string => {
    const month = date.month() + 1 > 9 ? date.month() + 1 : 0 + date.month() + 1
    const day = date.date() > 9 ? date.date() : 0 + date.date()
    const year = date.year()
    return `${day}-${month}-${year}`
}
// const newDate = date.toDate()
// console.log(`${month}:${day}:${year}`)
// const month = newDate.getUTCMonth() + 1
// const day = newDate.getDay()
// const week = newDate.get
// return `${year}:${month}:${day}`